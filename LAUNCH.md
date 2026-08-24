# Launch checklist

Open items that have to be closed before kyde.com goes live with the new
positioning. Written down so nothing gets carried over by accident.

## Copy still on the old positioning

The sentence "KYDE is the behavioral system of record for autonomous work"
was the old one-line pitch. It is still the closing boilerplate paragraph
in the articles and the meta description on four pages. Search engines and
readers get two different companies depending on which page they land on.

**Page meta descriptions** (highest priority, these are what shows in search
results):

- [ ] `layouts/Base.astro` default title and description, which every page
      without its own falls back to

- [ ] `company.astro`
- [ ] `platform.astro`
- [ ] `labs.astro`
- [ ] `content/docs/docs/index.md`

**Closing boilerplate in articles** (same paragraph, roughly 17 files):

- [ ] `ai-agent-governance.astro`
- [ ] `ai-agent-insurance.astro`
- [ ] `eu-ai-act-compliance.astro`
- [ ] `shadow-ai.astro`
- [ ] `shadow-ai-trilogy.astro`
- [ ] `compare/kyde-vs-witnessai.astro`
- [ ] `glossary/behavioral-firewall.astro`
- [ ] `whitepapers/machine-first-governance.astro`
- [ ] `blog/confidence-infrastructure-part-1.astro`
- [ ] `blog/confidence-infrastructure-part-2.astro`
- [ ] `blog/confidence-infrastructure-part-3.astro`
- [ ] `blog/drcf-agentic-ai-foresight.astro`
- [ ] `blog/eu-ai-act-audit-trails.astro`
- [ ] `blog/eu-ai-act-omnibus-collapse.astro`
- [ ] `blog/hbr-ai-agents-infrastructure.astro`
- [ ] `blog/missing-layer-agent-architecture.astro`
- [ ] `blog/nobody-governs-the-chain.astro`

Note: "Behavioral Firewall" stays inside the articles under Zero Trust
(decision Joerg). What has to go is the company pitch, not the term.

## Pages

- [ ] `/platform` still argues the old positioning end to end and is not
      linked from the footer. Decide: rewrite, or delete like the other
      seven contradicting pages.

## Deleted pages: decided, no redirects

Eight pages that contradicted the new positioning were removed: `/pricing`,
`/starter`, `/sandbox`, `/trust-score`, `/lp/trust-boundary`,
`/audit-readout`, `/blog/trust-is-a-number`, `/who-its-for`. They are live
today and answer 200; after the merge they answer 404.

**Decision (Joerg, 2026-08-22): no redirect stubs.** External links point
at the homepage, not at subpages, so there is nothing worth preserving.
`/trust-score` in particular should not be kept alive, since the term is
deliberately out of the positioning.

Nothing links to them internally (checked across all 69 pages, including
the absolute `https://kyde.com/...` links that the lychee config excludes),
and `/404` does not offer any of them either.

This lands softer than a bare 404: `src/pages/404.astro` counts down and
sends the reader to the homepage after five seconds, while GitHub Pages
still returns a real 404 status, so search engines get the correct signal
and people get routed on. Nothing more to build.

- [ ] Optional, cosmetic: the 404 headline is "Lost in the agentic
      wilderness" and the block is dressed as a fake terminal with traffic
      light dots, which is neither the current vocabulary nor the figure
      grammar in DESIGN.md.

## Deploy

- [ ] Three canonical URLs 404 until the new pages are live: `/audit`,
      `/zero-trust`, `/de/wissen/souveraene-ki`. Expected, resolves on
      deploy. Re-run `./scripts/qa.sh` afterwards to confirm.
- [ ] Homepage `<title>` and Organization schema were rewritten on
      2026-08-22. Check the search result snippet after the first crawl.
- [ ] `/receipts` needs real targets for two links. "View on GitHub" points
      at the `kydehq` org for now, not at a receipts repository, because none
      is referenced anywhere in this codebase. There is also no URL for the
      specification, so that CTA is not on the page yet.
- [ ] After deploy, re-check the deleted URLs above in Search Console and
      submit the removals or the redirects, whichever was decided.

## QA notes

- lychee 0.24.2 is installed via Homebrew, so `./scripts/qa.sh` no longer
  skips the link check. It runs against `dist/`.
- The two redirects lychee reports are a hint, not a finding: it suggests
  writing the resolved target URLs directly.
- lychee excludes `^https://kyde\.com`, so absolute self-links are not
  covered by the automated run and need checking by hand when pages move.
