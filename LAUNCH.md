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

## Deploy

- [ ] Three canonical URLs 404 until the new pages are live: `/audit`,
      `/zero-trust`, `/de/wissen/souveraene-ki`. Expected, resolves on
      deploy. Re-run `./scripts/qa.sh` afterwards to confirm.
- [ ] Homepage `<title>` and Organization schema were rewritten on
      2026-08-22. Check the search result snippet after the first crawl.
