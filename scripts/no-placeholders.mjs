#!/usr/bin/env node
// Refuses to let placeholder text reach a build.
//
// Exists because of one specific failure: a legal page is scaffolded with gaps
// that only the company can fill, and the gaps ship. An Impressum carrying
// "[BITTE ERGÄNZEN: Rechtsform]" is worse than no Impressum, because it is
// evidence that somebody knew the entry was required and published anyway.

import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SEARCH = ["src"];
const MARKERS = [/\[BITTE ERGÄNZEN/i, /\[TODO:/i, /\bLOREM IPSUM\b/i, /\[PLACEHOLDER/i];

const red = (s) => `\x1b[31m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/\.(astro|md|mdx|ts|tsx)$/.test(entry.name)) yield p;
  }
}

let hits = 0;
for (const base of SEARCH) {
  for await (const file of walk(join(ROOT, base))) {
    const src = await readFile(file, "utf8");
    src.split("\n").forEach((line, i) => {
      if (MARKERS.some((m) => m.test(line))) {
        console.log(red(`  ${relative(ROOT, file)}:${i + 1}`));
        console.log(dim(`    ${line.trim().slice(0, 120)}`));
        hits++;
      }
    });
  }
}

if (hits) {
  console.log("");
  console.log(red(`Placeholders: ${hits} unfilled marker(s). These must not ship.`));
  process.exit(1);
}
console.log(green("Placeholders: none."));
