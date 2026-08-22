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

## Deleted pages: decide before merging

Eight pages that contradicted the new positioning were removed. They are
live today and answer 200. After the merge they answer 404. Nothing links
to them internally any more (checked across all 69 pages, including
absolute `https://kyde.com/...` links, which the lychee config excludes),
but external links and search index entries stay where they are.

**Open decision, blocks the merge:** do `/pricing` and `/trust-score` get
a redirect to their successor page, or is the 404 wanted? They are the two
with the most likely inbound links.

- [ ] `/pricing` → redirect to ? or 404
- [ ] `/trust-score` → redirect to ? or 404
- [ ] `/starter`, `/sandbox`, `/lp/trust-boundary`, `/audit-readout`,
      `/blog/trust-is-a-number`, `/who-its-for` → 404 unless someone
      objects

Note: GitHub Pages serves static files, so a redirect here means a small
HTML stub with a meta refresh plus a canonical, not a server rule.

## Deploy

- [ ] Three canonical URLs 404 until the new pages are live: `/audit`,
      `/zero-trust`, `/de/wissen/souveraene-ki`. Expected, resolves on
      deploy. Re-run `./scripts/qa.sh` afterwards to confirm.
- [ ] Homepage `<title>` and Organization schema were rewritten on
      2026-08-22. Check the search result snippet after the first crawl.
- [ ] After deploy, re-check the deleted URLs above in Search Console and
      submit the removals or the redirects, whichever was decided.

## QA notes

- lychee 0.24.2 is installed via Homebrew, so `./scripts/qa.sh` no longer
  skips the link check. It runs against `dist/`.
- The two redirects lychee reports are a hint, not a finding: it suggests
  writing the resolved target URLs directly.
- lychee excludes `^https://kyde\.com`, so absolute self-links are not
  covered by the automated run and need checking by hand when pages move.
