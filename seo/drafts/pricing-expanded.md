---
type: playbook
title: Draft — /pricing (Ausbau)
description: Erweiterte Pricing-Seite (Welle 1) — Feature-Matrix, How-pricing-works, Kosten-Anker, Pricing-FAQ. Englische Copy, Preisrange als Entscheidungspunkt markiert.
tags: [seo, website, draft, pricing]
timestamp: 2026-07-16
---

> **STATUS: PORTED 2026-07-16** — live on kyde-website, see seo/index.md for the corrections applied during port (Sandbox→Starter, signed→hash-chained for the free tier, em-dashes removed). This file is the historical draft, not the source of truth anymore.

> **Interner Hinweis (nicht publishen):** Tier-Namen wie live (Sandbox / Business / Enterprise). ⚠️ **Entscheidung Joerg:** Preisrange öffentlich? Richtwert intern €8–25K/Mo Enterprise. Empfehlung: "starts at" Anker zeigen. Platzhalter unten mit [DECISION] markiert. Feature-Zuordnung vor Publish gegen Live-Site und Gateway-Status prüfen (WEB-001!).



**URL:** `/pricing`
**Meta Title:** Kyde Pricing: Sandbox, Business, Enterprise | Kyde
**Meta Description:** Transparent pricing for the Kyde Gateway. Free sandbox, predictable per deployment pricing, no per token surprises. See what each tier includes.



# Pricing

Governance is infrastructure. Infrastructure pricing should be boring and predictable. Kyde is priced per governed gateway deployment, not per token and not per seat. Your bill does not grow because your agents got busier.

## The three tiers

### Sandbox. Free, forever.
For teams that want to see before they buy. Deploy in five minutes with one environment variable.
- Full observe layer: every agent action recorded in a signed ledger
- Dashboard with live agent activity
- Compliance friendly exports
- Post hoc data loss alerts
- Multi provider: OpenAI, Anthropic, Gemini, local models, MCP routing
- Self serve, community support, no SLA

The Sandbox answers the question most teams cannot answer today: what are our agents actually doing? What it does not do is stop them. Observation alone does not satisfy enforcement duties under NIS-2 or the EU AI Act. That is deliberate, and it is why the next tier exists.

### Business. For your first regulated workloads. [DECISION: "Starts at €X per month"]
Everything in Sandbox, plus enforcement:
- Blocks out of policy actions before they execute, deny by default
- Per agent blocks and per tool MCP policy
- Role based access control for agent fleets
- Data loss prevention that intervenes, not just alerts
- Standard SLA and support

### Enterprise. For organizations under NIS-2, DORA and the EU AI Act. [DECISION: "Starts at €X per month" or "Talk to us"]
Everything in Business, plus the things auditors and boards ask about:
- Managed signing and key infrastructure
- Coverage reporting: which agent connections are governed, which bypass the gateway. The documented gap becomes a management decision instead of an unknown
- Compliance evidence packages for NIS-2, DORA and EU AI Act audits
- Priority SLA, named support, procurement and security review assistance
- Air gapped deployment available as a premium option

## How pricing works

You pay per governed gateway deployment. One deployment covers all agents and all providers routed through it. No per token metering, no per agent fees, no surprise bills when adoption grows. Growth in agent usage is a success, not a cost event.

## The comparison that actually matters

The honest benchmark for this budget line is not another tool. It is the cost of not being able to prove what your agents did.

- NIS-2 fines reach €10M or 2 percent of global turnover, and management is personally liable
- DORA gives financial supervisors direct enforcement power over operational resilience failures
- EU AI Act high risk violations reach €35M or 7 percent of turnover when enforcement begins December 2, 2027
- One failed audit consumes more senior time than a year of governance infrastructure

Against a single incident where you cannot produce evidence, every tier on this page is a rounding error.

## Pricing FAQ

**Can we start free and upgrade later?**
Yes. That is the intended path. Deploy the Sandbox, see your agent landscape, then turn on enforcement where liability lives. Your ledger history carries over.

**Does the gateway add latency?**
The gateway performs deterministic policy checks, not model calls. There is no LLM in the enforcement path. Ask us for current benchmark figures for your deployment pattern.

**What happens if the gateway goes down?**
You choose the failure mode per policy: fail closed for regulated workloads, fail open for low risk traffic. Either way, the decision is documented policy, not an accident.

**Do you see our data?**
Enforcement runs at your edge, inside your perimeter. Our cloud receives metadata that powers fleet intelligence, not your payloads. Air gapped operation is available on Enterprise.

**Does routing traffic through Kyde make us a "provider" under the EU AI Act?**
Kyde is an external proxy. It does not modify your models or pipelines, which is exactly why it avoids the substantial modification trap under Article 25. You remain the deployer. Ask us for the legal memo.

**Do you charge per agent or per token?**
Neither. Per governed deployment. We think metering governance by usage punishes exactly the behavior you want.

**Is there a proof of concept option?**
Yes. The Sandbox is the PoC, on your infrastructure, with your real traffic. For Enterprise evaluations we scope a pilot with success criteria in writing.

**We are not in the EU. Is this relevant?**
The evidence problem is universal. If your customers, insurers or regulators can ask what your agents did, you need an answer that holds. EU rules are simply the first with dates attached.



**CTA:** Deploy the free Sandbox today, or talk to us about Business and Enterprise.

Internal links: /who-its-for · /platform · /faq · /compare/kyde-vs-witnessai
