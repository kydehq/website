import type { APIRoute } from "astro";
import { ARTICLES, GUIDES, GLOSSARY_TERMS, KEY_PAGES } from "../data/content-index";

// A machine-readable index of the site, built from the same lists the pages
// render. Two readers: the WebMCP tools in WebMcpTools.astro, which search it
// in the visitor's browser, and anyone who fetches it directly.
//
// It is deliberately a flat array of the same four fields rather than a nested
// shape per section. A consumer that has to learn a schema before it can search
// is a consumer that will search badly, and llms.txt already carries the
// curated, prose version for readers who want the argument rather than the rows.
//
// Prerendered: this is a static site, so the JSON is written once at build time
// and served as a file. There is no request-time work and nothing to rate-limit.
export const prerender = true;

const BASE = "https://kyde.com";

type Entry = {
  title: string;
  url: string;
  kind: string;
  summary: string;
};

const fromArticles = (rows: typeof ARTICLES, kind: string): Entry[] =>
  rows.map(({ title, summary, href, category }) => ({
    title,
    url: BASE + href,
    kind: `${kind} · ${category}`,
    summary,
  }));

export const GET: APIRoute = () => {
  const entries: Entry[] = [
    ...fromArticles(KEY_PAGES, "Page"),
    ...fromArticles(ARTICLES, "Article"),
    ...fromArticles(GUIDES, "Guide"),
    ...GLOSSARY_TERMS.map(({ term, slug, teaser }) => ({
      title: term,
      url: `${BASE}/glossary/${slug}`,
      kind: "Glossary",
      summary: teaser,
    })),
  ];

  return new Response(
    JSON.stringify(
      {
        name: "Kyde",
        description:
          "Kyde is the zero trust layer for AI: identity, policy, data boundaries and limits checked at the moment of action, and a record anyone can verify, in the customer's own environment. On top of it Kyde builds AI workers out of the processes a company already runs.",
        prose_index: `${BASE}/llms.txt`,
        generated: new Date().toISOString().slice(0, 10),
        count: entries.length,
        entries,
      },
      null,
      2,
    ),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=3600",
      },
    },
  );
};
