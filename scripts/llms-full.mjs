// Writes dist/llms-full.txt: the full text of every indexed page in one file.
//
// llms.txt is the curated index; this is the corpus. An agent that wants the
// whole argument gets it in one fetch instead of crawling fifty URLs, and a
// retrieval pipeline that chunks one file beats one that has to schedule a
// crawl. The page list is dist/site-index.json — the same curation the WebMCP
// search uses — so a page joins this file by joining the content index, the
// rule content-index.ts opens with.
//
// Runs after `astro build` (see the build script in package.json); reads only
// dist/, writes only dist/, so it cannot touch source.

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

const index = JSON.parse(await readFile(path.join(DIST, "site-index.json"), "utf8"));

// HTML to text, no dependencies. Good enough for prose pages: drop the
// invisible elements and the chrome, turn block boundaries into newlines,
// strip the rest of the tags, decode the entities the site actually uses.
const textOf = (html) => {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  // The page body without navigation and footer, when the page marks it.
  const main = s.match(/<main[\s\S]*?<\/main>/i);
  if (main) s = main[0];
  s = s
    .replace(/<(?:h[1-6])[^>]*>/gi, "\n\n## ")
    .replace(/<\/(?:p|div|section|li|tr|h[1-6]|blockquote|pre|table)>/gi, "\n")
    .replace(/<(?:br|hr)[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&(?:nbsp|#160);/g, " ")
    .replace(/&(?:ndash|#8211);/g, "–")
    .replace(/&(?:mdash|#8212);/g, "—")
    .replace(/&rarr;/g, "→");
  return s
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};

const parts = [
  "# Kyde — full site text",
  "",
  "Every page of https://kyde.com that the content index lists, as plain text,",
  "one file. Curated index with summaries: https://kyde.com/llms.txt — flat",
  "JSON index: https://kyde.com/site-index.json — generated at build time.",
  "",
];

let included = 0;
const missing = [];
for (const entry of index.entries) {
  const pathname = new URL(entry.url).pathname.replace(/\/$/, "");
  const file = path.join(DIST, pathname === "" ? "index.html" : `${pathname.slice(1)}/index.html`);
  if (!existsSync(file)) {
    missing.push(entry.url);
    continue;
  }
  const body = textOf(await readFile(file, "utf8"));
  parts.push("", "---", "", `# ${entry.title}`, `URL: ${entry.url}`, `Kind: ${entry.kind}`, "", body);
  included += 1;
}

await writeFile(path.join(DIST, "llms-full.txt"), parts.join("\n") + "\n");
console.log(`llms-full.txt: ${included} pages${missing.length ? `, missing: ${missing.join(", ")}` : ""}`);
// A missing page means the index names a URL the build did not produce, which
// is a broken promise to every consumer of the index, not just this file.
if (missing.length) process.exit(1);
