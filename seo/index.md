---
type: index
title: marketing/website/seo — Übersicht
description: SEO-Monster-Programm für kyde.com — Masterplan, Seiten-Templates und publish-fertige Drafts (Welle 1).
tags: [seo, website, marketing]
timestamp: 2026-07-16
---

# marketing/website/seo

Das SEO-Seitennetz für kyde.com (Entscheid Joerg 2026-07-16: Englisch only, Vergleiche voll namentlich). Backlog: SEO-001 bis SEO-006 in `backlog/BACKLOG.md`; baut auf SGTM-002/003/009 auf.

- [seo-monster-plan.md](seo-monster-plan.md) — **Der Masterplan:** 7 Seitentypen, ~60 Seiten, Wellen-Roadmap KW29–KW38, technisches Fundament, KPIs, Hausregeln.
- `templates/`
  - [comparison-page-template.md](templates/comparison-page-template.md) — Wiederverwendbares Template für /compare/kyde-vs-x (Achsen, Ton-Regeln, Publish-Checkliste).
- `drafts/` — Englische Seiten-Copy, Welle 1 **ist geportet** (2026-07-16, Joerg-Entscheid: kein öffentlicher Preis, alle neuen Seiten hängen unter /resources):
  - [compare-kyde-vs-witnessai.md](drafts/compare-kyde-vs-witnessai.md) → live: `/compare/kyde-vs-witnessai`
  - [who-kyde-is-for.md](drafts/who-kyde-is-for.md) → live: `/who-its-for`
  - [pricing-expanded.md](drafts/pricing-expanded.md) → integriert in live `/pricing` (How pricing works, Kosten-Anker, Pricing-FAQ). **Kein Preis gezeigt** — SEO-002 bleibt offen, Joerg checkt das noch.
  - Neu, nicht im ursprünglichen Draft-Set: `/faq` (Type G, aus verifizierten Facts geschrieben statt aus dem veralteten `objection-handling.md` vom 2026-05-07 portiert)

  **Korrekturen beim Portieren** (die Drafts waren vor dem Sandbox→Starter-Rename und vor der Signing-Klärung geschrieben):
  1. Sandbox → Starter überall (Tier-Name, CTAs, Meta-Titles)
  2. "signed ledger" für den Free-Tier korrigiert zu "hash-chained" — Ed25519-Signing ist Enterprise-only (Joerg-Entscheid, bestätigt 2026-07-15)
  3. Lange Gedankenstriche entfernt (Hausregel 1)

  **Offener Konflikt, nicht selbst aufgelöst:** `pricing-expanded.md` schlägt "priced per governed gateway deployment, not per agent" vor — die live Pricing-Seite sagt seit Hero-Headline "Per agent identity. Not per seat." Das sind zwei verschiedene Preismodelle. Ich habe die geporteten Seiten konsistent zum **live gezeigten** Pro-Agent-Modell gebaut. Braucht eine bewusste Entscheidung, bevor Welle 2 weitere Preis-Copy schreibt.
