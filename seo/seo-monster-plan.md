---
type: playbook
title: SEO Monster Plan — kyde.com
description: Masterplan für das programmatische SEO-Seitennetz auf kyde.com — 7 Seitentypen, ~60 Seiten, Wellen-Roadmap KW29–KW38, Templates, KPIs.
tags: [seo, website, gtm, content, geo]
timestamp: 2026-07-16
---

# SEO Monster Plan — kyde.com
> Owner: Joerg · Stand: 2026-07-16
> Sprache der Seiten: **Englisch only** (Entscheid Joerg 16.07.)
> Vergleichsseiten: **voll namentlich** (Entscheid Joerg 16.07.) — fair und ehrlich, kein Strohmann (Kyvvu-Lektion)
> Referenzen: `backlog/BACKLOG.md` (SGTM-002/003/009, SBX-001/002) · `02_market/competition.md` · `02_market/icp.md` · `marketing/website-seo-daily-plan.md` · Live-Repo `../kyde-website`

---

## 1. Das Prinzip

**Bottom-of-Funnel first.** Wir bauen keine Blog-Bibliothek, wir bauen ein Netz aus Seiten, auf denen kaufreife CISOs/CCOs landen, kurz bevor sie eine Entscheidung treffen. Jede Seite beantwortet eine Frage, die jemand mit Budget googelt (oder Perplexity/ChatGPT fragt — GEO zählt doppelt).

Die Logik folgt dem bewährten SaaS-Playbook: nach der Homepage zuerst **Who it's for → Comparisons (viele!) → Alternatives → Pricing (ausführlich) → Docs/Migration Guides → Industry Pages → Real FAQs**.

**Warum das für Kyde besonders gut funktioniert:**
1. Der Markt ist jung und verwirrt — Suchende vergleichen ständig ("WitnessAI vs", "Lakera alternative", "Portkey audit log"). Wer die Vergleichsseite besitzt, besitzt die Kaufentscheidung.
2. Wir haben die Battlecards schon: `competition.md` deckt 30+ Player mit ehrlichen Edges ab. Das ist fertiger Seiten-Rohstoff.
3. Regulatorik erzeugt Long-Tail ohne Ende (NIS-2 + Agent, DORA + AI audit trail, EU AI Act Article 12 logging, Annex III pro Vertical).
4. LLMs zitieren strukturierte, ehrliche Vergleichs- und Docs-Seiten überproportional → GEO-Hebel.

**Verzahnung mit bestehendem Backlog:** Dieser Plan ist die Ausbaustufe von SGTM-002 (Keyword-Liste), SGTM-003 (Top-10-Landingpages) und SGTM-009 (3 Comparison-Pages). Diese Items bleiben gültig — der Plan gibt ihnen die Ziel-Architektur und skaliert sie auf ~60 Seiten.

**Harte Voraussetzung:** SBX-001/SBX-002 (Sandbox-Distribution public + CTAs aktiv). Bis dahin ist der CTA aller neuen Seiten "Talk to us" / Early Access. Seiten trotzdem JETZT bauen — SEO braucht Vorlauf (3–6 Monate bis Ranking).

---

## 2. Site-Architektur (Zielbild)

```
kyde.com/
├── (bestehend) / · /platform · /trust-score · /use-cases · /sandbox · /pricing
├── (bestehend) Guides: eu-ai-act-compliance · ai-agent-governance · shadow-ai
├── /who-its-for                     ← Typ A (1 Seite)
├── /compare/                        ← Typ B (Hub + ~15 Seiten)
│   └── kyde-vs-<competitor>
├── /alternatives/                   ← Typ C (Hub + ~8 Seiten)
│   └── <competitor>-alternatives
├── /pricing                         ← Typ D (massiv ausbauen)
├── /docs/                           ← Typ E (~15 Seiten)
│   ├── quickstart · providers/<x> · frameworks/<x> · migrate/<x>
│   └── llms.txt + llms-full.txt + jede Docs-Seite auch als .md (Agent Docs)
├── /industries/                     ← Typ F (Hub + 10 Seiten)
│   └── <vertical>
├── /faq                             ← Typ G (1 große Seite, später aufteilbar)
└── /glossary/ (Welle 4, optional)   ← Definitions-Long-Tail
```

Interne Verlinkung als Hub-and-Spoke: Jede Industry-Seite verlinkt auf die passenden Comparison- und Docs-Seiten, jede Comparison auf Pricing + Who-it's-for + passende Industry. Kein Orphan. Jede Seite maximal 3 Klicks von der Homepage.

---

## 3. Die 7 Seitentypen im Detail

### Typ A — Who we're best for (`/who-its-for`) · 1 Seite · Welle 1

Die ehrlichste Seite der Site: für wen Kyde gebaut ist, für wen (noch) nicht. Selbstqualifizierung spart Sales-Zeit und ist ein starkes Trust-Signal (auch für LLMs). Inhalt aus `icp.md`: Buyer (CISO/CCO/DPO), die 3 Sofort-Verticals, Qualifying-Kriterien als Checkliste, "Not for you if..."-Block (kein Consumer, keine reine Chatbot-Absicherung, kein Prompt-Injection-Tool). Draft liegt bei: `drafts/who-kyde-is-for.md`.

**Queries:** "who needs ai agent governance", "ai agent compliance for fintech", "nis-2 ai agent responsibility ciso"

### Typ B — Competitor Comparisons (`/compare/kyde-vs-<x>`) · ~15 Seiten · Welle 1–3

Der größte Hebel. Ein Template (siehe `templates/comparison-page-template.md`), pro Wettbewerber eine Seite. **Ton: faktisch, fair, zwei ehrliche ✓ für den Wettbewerber, wo verdient** — ein Strohmann fliegt bei jedem Prospect auf, der beide Demos gesehen hat (und bei jedem LLM, das beide Sites gelesen hat).

Standard-Achsen der Vergleichstabelle (aus dem Deck):
1. No-code / Shadow-agent coverage (network egress, kein SDK)
2. Blocks before execution (deterministisch, nicht probabilistisch)
3. Cryptographic audit trail (Ed25519, hash-chained, vendor-unabhängig)
4. EU sovereignty / Article 25 safety
5. Path-aware / stateful enforcement (Spalte ehrlich führen — Kyvvu hat hier ein ✓)

**Priorisierung:**

| Welle | Seiten | Warum |
|-------|--------|-------|
| 1 (KW29–30) | vs WitnessAI · vs Geordie AI · vs Lakera | Meistgesucht, engste Konkurrenten, Naming-Verwechslung (WitnessAI!) |
| 2 (KW31–32) | vs Zenity · vs Vanta · vs Noma Security · vs Prompt Security | Gleicher Buyer, hohe Awareness. Vanta = "Doku vs. Enforcement"-Story |
| 3 (KW33–35) | vs Portkey · vs Cloudflare AI Gateway · vs Kong AI Gateway · vs Helicone · vs LiteLLM | Gateway-Verwechsler: hohes Suchvolumen, wir fangen "LLM gateway + audit" Intent |
| 4 (KW36+) | vs Oasis · vs Alinia · vs Kyvvu · vs Runlayer · vs Microsoft Purview | Long-Tail, Investor-Due-Diligence-Traffic |

**Queries pro Seite:** "kyde vs <x>", "<x> vs kyde", "<x> review", "<x> pricing", "<x> competitors"

### Typ C — Alternatives (`/alternatives/<x>-alternatives`) · Hub + ~8 Seiten · Welle 2–3

Anderer Such-Intent als Typ B: Wer "<x> alternatives" sucht, ist unzufrieden oder im Vendor-Vergleich — die heißesten Leads überhaupt. Format: ehrliche Listicle-Seite ("7 WitnessAI alternatives in 2026"), Kyde als eine Option unter mehreren, mit klarem "best for"-Label pro Tool. Ehrlichkeit macht die Seite zitierfähig (GEO) und glaubwürdig.

Seiten: witnessai-alternatives · zenity-alternatives · lakera-alternatives · vanta-alternatives (Achtung: GRC-Intent, Winkel "Vanta documents, you also need enforcement") · portkey-alternatives · noma-security-alternatives · prompt-security-alternatives · helicone-alternatives. Dazu 2 Kategorie-Hubs: "Best AI agent governance tools 2026" + "Best agent firewall / AI gateway with audit trail".

### Typ D — Pricing +++ (`/pricing` ausbauen) · Welle 1

Die Pricing-Seite ist heute (3 Tiers) zu dünn für den Such-Intent "kyde pricing" und für den CISO, der intern budgetieren muss. Ausbau (Draft: `drafts/pricing-expanded.md`):
- Ausführliche Feature-Matrix pro Tier (Sandbox / Business / Enterprise)
- "How pricing works" (Metrik: pro governed Deployment/Gateway, nicht pro Token — Planbarkeit als Verkaufsargument)
- Kosten-Anker: "What does one failed audit cost?" (NIS-2-Bußgeld, DORA, Vorstandshaftung) — der Preis wird relativ dazu klein
- Pricing-FAQ (10+ echte Fragen: Latenz, Air-gapped-Premium, SLA, Procurement, PoC)
- **Entscheidung Joerg offen:** Preisrange öffentlich zeigen (€8–25K/Mo Enterprise-Richtwert)? Empfehlung: mindestens "starts at"-Anker zeigen — Seiten ohne Zahl verlieren den "pricing"-Intent an Vergleichsportale.

### Typ E — Docs / Migration Guides / Agent Docs (`/docs/`) · ~15 Seiten · Welle 2–3

Docs sind SEO-Seiten: Jede Provider-/Framework-Kombination ist eine eigene Query.
- **Quickstart** (5 Minuten, eine ENV-Variable) — die Kernseite
- **Provider-Guides:** OpenAI · Anthropic · Gemini · Azure OpenAI · Ollama · vLLM · LM Studio ("govern <provider> agents", "audit log for <provider> api")
- **Framework-Guides:** LangChain · LangGraph · CrewAI · AutoGen · Copilot Studio · MCP servers ("langchain audit trail", "mcp gateway security")
- **Migration Guides:** "Switch from Portkey" · "Add governance on top of LiteLLM" · "From Helicone observability to enforcement" · LibreChat-Onramp (aus `03_gtm/strategy/librechat-onramp.md`)
- **Agent Docs (GEO):** `llms.txt` aktualisieren (liegt als Entwurf in `website-seo-daily-plan.md` — Datum EU AI Act auf Dez 2027 korrigieren!), `llms-full.txt` ergänzen, jede Docs-Seite zusätzlich als reines Markdown ausliefern (`/docs/<page>.md`) — AI-Crawler bevorzugen das, und unsere Buyer fragen zunehmend Agenten statt Google.

### Typ F — Industry Pages (`/industries/<vertical>`) · Hub + 10 Seiten · Welle 2–3

Ein Template, 10 Verticals aus `icp.md` + `vertical-law-matrix.md`. Struktur pro Seite: konkretes Agent-Szenario des Verticals → welche Regulierung greift (Annex-III-Punkt, Artikel, NIS-2/DORA-Bezug) → der Pain in einem Satz (aus icp.md, die sind stark) → wie Kyde das löst (Prevent/Prove/Rate auf das Vertical gemappt) → Mini-FAQ → CTA.

Reihenfolge = ICP-Priorisierung: 1. Fintech/BNPL · 2. HR-Tech/Recruiting · 3. Insurance/Claims · 4. Banking Customer Service · 5. Enterprise Software Delivery (Coding-Shops) · 6. Legal Tech · 7. Healthcare/Radiology · 8. Critical Infrastructure/Energy · 9. EdTech/Proctoring · 10. Public Sector/Migration.

**Queries:** "eu ai act annex iii recruiting software", "dora ai agent audit trail bank", "bafin ai claims automation evidence"

### Typ G — Real Customer FAQs (`/faq`) · 1 Seite · Welle 1, wächst laufend

Nicht ausgedachte Marketing-FAQs, sondern echte Fragen aus CISO-Interviews (`06_research/insights/`) und Objection-Handling (`03_gtm/sales/objection-handling.md`): Latenz? Was passiert wenn das Gateway ausfällt? Seht ihr unsere Daten? Article 25? Air-gapped möglich? Unterschied zu SIEM / API-Gateway / DLP? Warum nicht warten bis OpenAI das baut? Jede Antwort 3–6 Sätze, mit FAQPage-Schema ausgezeichnet (Rich Snippets + GEO-Zitierbarkeit). Prozess: Jede neue Frage aus einem echten Sales-Call landet binnen einer Woche auf der Seite.

---

## 4. Technisches Fundament (Welle 1, einmalig)

1. `sitemap.xml` prüfen + Google Search Console + Bing Webmaster Tools einreichen
2. Schema.org: Organization + Product (sitewide), FAQPage (/faq + Pricing-FAQ), BreadcrumbList (alle Hub-Unterseiten), SoftwareApplication (/platform)
3. `llms.txt` deployen/aktualisieren (Inhalt siehe Typ E — Datums-Korrektur!)
4. Meta-Pattern: Title ≤60 Zeichen, "Primary Query | Kyde"; Description mit konkreter Zahl/Deadline
5. Breadcrumbs + Hub-Seiten für /compare/, /alternatives/, /industries/, /docs/
6. Interne Suche der Site-Struktur: jede neue Seite bekommt bei Launch 3+ eingehende interne Links
7. Astro: ein Layout/Component pro Seitentyp → neue Seite = ein Markdown/Data-File (programmatisch skalierbar)

---

## 5. Roadmap in Wellen

| Welle | Zeitraum | Output | Kumuliert |
|-------|----------|--------|-----------|
| **1 — Fundament + Money Pages** | KW29–30 | Technik-Fundament, /who-its-for, /faq (v1, 10 Fragen), Pricing-Ausbau, 3 Comparisons (WitnessAI, Geordie, Lakera) = erfüllt SGTM-009 | ~7 Seiten |
| **2 — Comparison + Industry Core** | KW31–32 | 4 Comparisons (Zenity, Vanta, Noma, Prompt Security), 3 Alternatives, 3 Industries (Fintech, HR, Insurance), Docs-Quickstart + 3 Provider-Guides | ~20 Seiten |
| **3 — Gateway-Cluster + Scale** | KW33–35 | 5 Gateway-Comparisons (Portkey, Cloudflare, Kong, Helicone, LiteLLM), 3 Alternatives, 4 Industries, 5 Docs/Migration-Guides, 2 Kategorie-Hubs | ~40 Seiten |
| **4 — Long-Tail + Pflege** | KW36–38 | Rest-Comparisons, Rest-Industries, Glossary-Start, /faq-Ausbau, Refresh nach Search-Console-Daten | ~60 Seiten |

Kapazität: ~90 Min/Tag aus dem bestehenden 2h-Block (Routine aus `website-seo-daily-plan.md` läuft weiter). Mit Agent-Unterstützung (Template + Battlecard → Draft, Joerg reviewed) sind 2–3 Seiten/Tag realistisch. **Qualitätsregel: lieber 3 exzellente Seiten pro Woche als 10 dünne** — Thin Content schadet der ganzen Domain.

## 6. Messung

- **Wöchentlich (im SGTM-008-Review):** indexierte Seiten, Impressions/Clicks pro Seitentyp (Search Console), Signups mit Quelle = SEO-Seite (Funnel aus SGTM-001)
- **GEO-Check täglich (Routine läuft):** 5 Test-Queries, neu ergänzt um "WitnessAI alternatives" und "best AI agent governance tools"
- **Meilensteine:** KW32: 20 Seiten indexiert · KW35: erste Comparison-Seite in Top 20 + 1 GEO-Zitat · KW38: 60 Seiten live, ≥3 Seiten mit organischen Signups
- Kill/Scale-Regel je Seitentyp nach 8 Wochen Daten: Typ mit Traction verdoppeln, Typ ohne Impressions überarbeiten statt erweitern

## 7. Hausregeln für jede Seite (Pflicht)

1. **Keine langen Gedankenstriche in Seiten-Copy** (KI-Signal, Regel Joerg 2026-07-12)
2. Naming: **Kyde Gateway**, Tiers Sandbox/Business/Enterprise. "Witness" nie als Produktname
3. Datums-Wahrheit: **NIS-2 + DORA = heute, EU AI Act High-Risk = 2. Dezember 2027** (nie "August 2026")
4. Shipping-Wahrheit: keine Features im Präsens behaupten, die WEB-001 (Ed25519/TPM-Status) noch klären muss — im Zweifel Formulierung aus /platform übernehmen
5. Vergleiche: mindestens zwei ehrliche Stärken des Wettbewerbers, Stand-Datum auf der Seite ("Last verified July 2026")
6. Jede Seite: ein CTA (Sandbox nach SBX-002, bis dahin Talk to us), 3+ interne Links, Meta Title/Description, Schema wo passend
7. **Keine Funding-Zahlen kommunizieren** (Entscheid Joerg 2026-07-16, generell, nicht nur pro Seite) — kein "$X raised", keine Series-Bezeichnung, kein Bewertungs-Anker für Wettbewerber, auch nicht als vermeintliches Kompliment. Qualitative Einordnung ("well-funded", "mature platform") ist erlaubt, konkrete Zahlen nicht.

---

*Nächster Schritt: Backlog-Items SEO-001 bis SEO-006 (siehe BACKLOG.md, Sektion 2026-07-16) · Drafts in `drafts/` reviewen und ins `../kyde-website`-Repo portieren.*

*Kyde — The Trust Layer for the Agentic Economy*
