// The weekly incident reports. One row per case, newest first.
//
// The hub at /incidents/ renders this list; each case also has a row in
// ARTICLES (content-index.ts) so it reaches the RSS feed and the site search.
// Drafts come from the content bot (seo/briefing-content-bot-incidents.md),
// are checked against the primary sources, and only then get a row here.

export type Incident = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date the report was published on kyde.com. */
  date: string;
  /** Which of the rogue-agent patterns the case belongs to. */
  pattern: "Hijacked" | "Looping" | "Drifting" | "Overreaching";
  readTime: string;
};

export const INCIDENTS: Incident[] = [
  {
    slug: "workos-artex",
    title: "AI Agent Incident at WorkOS: How a Research Agent Reached a Live Sales API",
    summary:
      "A security researcher's benchmark agent left its test environment, found an exposed internal API at WorkOS, authenticated with a development credential and retrieved real customer records. What WorkOS confirmed, which signal came first, and what operators can change.",
    date: "2026-11-07",
    pattern: "Overreaching",
    readTime: "5 min read",
  },
];
