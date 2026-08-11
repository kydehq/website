#!/usr/bin/env node
// Reports translations whose English source has moved since they were written.
//
// The failure this exists to prevent is not a missing translation, which is
// obvious. It is a German page still carrying a claim the English one has
// already corrected, in a language the team reads less closely. That drift is
// silent, so something other than memory has to notice it.
//
// Compares a hash of the English page's VISIBLE TEXT, not the file: reordering
// classes, renaming a variable or reformatting must not raise a false alarm,
// because a check that cries wolf gets ignored and then it protects nothing.
//
// Usage: node scripts/i18n-drift.mjs [--update]
//   --update  rewrite the stored hashes, after the translations were brought
//             back in line. Never run it to make the check quiet.

import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const ROOT = new URL("..", import.meta.url).pathname;
const TABLE = `${ROOT}src/data/locales.ts`;
const UPDATE = process.argv.includes("--update");

const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

/** Visible text of an .astro page: no frontmatter, scripts, styles, tags or comments. */
function visibleText(src) {
  return src
    .replace(/^---[\s\S]*?---/, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const hashOf = (text) => createHash("sha256").update(text).digest("hex").slice(0, 16);

const pageFile = (p) => {
  const clean = p.replace(/^\/+|\/+$/g, "");
  for (const c of [`${ROOT}src/pages/${clean}.astro`, `${ROOT}src/pages/${clean}/index.astro`]) {
    if (existsSync(c)) return c;
  }
  return null;
};

const table = await readFile(TABLE, "utf8");
const pairs = [...table.matchAll(
  /\{\s*en:\s*"([^"]+)",\s*de:\s*"([^"]+)",\s*sourceHash:\s*(null|"[^"]*")/g
)].map((m) => ({ en: m[1], de: m[2], sourceHash: m[3] === "null" ? null : m[3].slice(1, -1) }));

if (pairs.length === 0) {
  console.log(dim("i18n drift: no locale pairs declared yet, nothing to check."));
  process.exit(0);
}

let stale = 0, missing = 0, drafting = 0, updated = table;

for (const pair of pairs) {
  const enFile = pageFile(pair.en);
  const deFile = pageFile(pair.de);

  if (!enFile) { console.log(red(`  MISSING  /${pair.en} — English source does not exist`)); missing++; continue; }
  if (!deFile) { console.log(red(`  MISSING  /${pair.de} — German page does not exist`)); missing++; continue; }

  const current = hashOf(visibleText(await readFile(enFile, "utf8")));

  if (pair.sourceHash === null) {
    console.log(yellow(`  DRAFT    /${pair.de} — no source hash recorded yet`));
    drafting++;
    if (UPDATE) updated = updated.replace(`de: "${pair.de}",\n    sourceHash: null`, `de: "${pair.de}",\n    sourceHash: "${current}"`);
    continue;
  }

  if (current !== pair.sourceHash) {
    console.log(red(`  STALE    /${pair.de}`));
    console.log(dim(`           /${pair.en} changed since the translation was written`));
    console.log(dim(`           recorded ${pair.sourceHash} · now ${current}`));
    stale++;
    if (UPDATE) updated = updated.replace(`sourceHash: "${pair.sourceHash}"`, `sourceHash: "${current}"`);
  } else {
    console.log(green(`  OK       /${pair.de}`));
  }
}

if (UPDATE && updated !== table) {
  await writeFile(TABLE, updated);
  console.log(dim("\n  hashes rewritten — only correct if the translations were actually updated"));
  process.exit(0);
}

console.log("");
if (missing) { console.log(red(`i18n drift: ${missing} broken pair(s).`)); process.exit(1); }
if (stale) {
  console.log(red(`i18n drift: ${stale} translation(s) behind their English source.`));
  console.log(dim("Update the German page, then run: npm run qa:i18n -- --update"));
  process.exit(1);
}
console.log(green(`i18n drift: ${pairs.length} pair(s) in sync.`) + (drafting ? yellow(` ${drafting} in draft.`) : ""));
