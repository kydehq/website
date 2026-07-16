---
type: playbook
title: Draft — /who-its-for
description: ICP-Seite (Welle 1) — für wen Kyde gebaut ist, für wen nicht. Englische Seiten-Copy, bereit zum Port nach Review.
tags: [seo, website, draft, icp]
timestamp: 2026-07-16
---

> **STATUS: PORTED 2026-07-16** — live on kyde-website, see seo/index.md for the corrections applied during port (Sandbox→Starter, signed→hash-chained for the free tier, em-dashes removed). This file is the historical draft, not the source of truth anymore.

> **Interner Hinweis (nicht publishen):** Quelle: `02_market/icp.md` + `03_gtm/strategy/buyer-personas.md`. Verticals-Links aktivieren, sobald /industries-Seiten live sind.



**URL:** `/who-its-for`
**Meta Title:** Who Kyde Is For (And Who It Is Not) | Kyde
**Meta Description:** Kyde is built for security and compliance leaders in regulated industries who are liable for what AI agents do. Check in two minutes whether that is you.



# Who Kyde is for

Kyde is not for everyone. It is built for a specific situation: **your organization runs AI agents that act, and someone in your organization is legally responsible for what they do.** If that sentence describes you, everything on this site was written for you. If not, we would rather tell you now than waste your evaluation cycle.

## You are in the right place if

**You carry the liability.** You are a CISO, CCO, DPO or board member in a regulated company. NIS-2 makes management personally liable today. DORA requires financial entities to prove operational control today. The EU AI Act adds logging duties for high risk systems from December 2, 2027. When the regulator asks what your agents did last quarter, the answer lands on your desk.

**Your agents act, not just chat.** Your AI does not only answer questions. It screens candidates, approves claims, changes customer records, writes production code or moves money. The moment an agent acts, the question changes from "was the answer good" to "was the action allowed, and can we prove it".

**You cannot see every agent.** Teams adopt agents faster than security can review them. You suspect there are agents running right now that never crossed your desk. You need governance that covers agents that never opted in, without asking every developer to change code.

**You need evidence, not dashboards.** An auditor, a regulator or a court will not accept a screenshot of a monitoring tool. You need records that are signed, tamper evident and independent of the AI vendor whose agent is under investigation.

## The industries we serve first

Kyde works with early access partners in regulated industries. The deepest fit today:

1. **Fintech and BNPL.** Agents decide creditworthiness in real time. EU AI Act high risk, plus DORA. You must explain every rejection.
2. **HR tech and recruiting.** Agents screen CVs and rank candidates. High risk under Annex III. If an agent discriminated, you must be able to prove what happened, or that it did not.
3. **Insurance.** Agents assess damage and release payments. When the supervisor asks why claims were systematically underpaid, you need the decision trail.
4. **Banking customer service.** Chatbots with transaction rights. If a fraudster changed an address through your agent, the burden of proof is yours.
5. **Software delivery for regulated clients.** Your developers use coding agents on systems your bank customers get audited on. Your client will ask for proof of code provenance.

Also a strong fit: legal tech, healthcare AI, critical infrastructure, education technology and public sector software. Detailed pages per industry are rolling out.

## Kyde is probably not for you if

- **You use AI only for content and chat.** If no agent touches a system of record, a prompt safety tool serves you better than a governance boundary.
- **You want prompt injection detection as the core feature.** That is the semantic layer. Kyde is the structural layer beneath it: what may execute at all. The two combine well, but do not confuse them.
- **You are a consumer app.** Kyde is enterprise infrastructure for organizations that answer to regulators.
- **You want an AI usage policy PDF.** GRC platforms document your program. Kyde enforces it at runtime and produces the evidence. Documentation without enforcement will not survive an incident.

## A two minute self check

1. Do you have AI agents in production today, or within two quarters?
2. Could any of them be classified high risk under the EU AI Act?
3. Could you prove, this week, what a specific agent did last week?
4. Who is personally accountable if an agent causes damage?
5. Is NIS-2 or DORA already on your compliance roadmap?

If you answered yes to 1, are unsure about 2, and answered "not really" to 3: that is exactly the gap Kyde closes. Question 4 is why it matters. Question 5 is why it matters now.



**CTA:** Start with the free Kyde Gateway Sandbox and see every agent action in a signed ledger, or talk to us about early access.

Internal links: /pricing · /platform · /compare/kyde-vs-witnessai · /faq
