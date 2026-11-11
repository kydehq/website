
**Version 1.0 · Effective 11 November 2026**

This Data Processing Agreement (**DPA**) applies when Kyde processes personal data on your behalf as part of Kyde Score. In this DPA, "you" means the customer as controller and "Kyde" means the processor. Terms such as "personal data", "processing" and "sub-processor" have the meaning given in the GDPR.

## 1. Subject matter and duration

1.1 Kyde processes telemetry about AI agents that you send to the Service, in order to learn baselines, compute scores, store call records, raise alarms and deliver notifications, as described in the Terms.

1.2 This DPA applies for as long as Kyde processes personal data for you under the Terms.

## 2. Instructions

2.1 Kyde processes personal data only on your documented instructions. The Terms, this DPA and your configuration of the Service (keys, agents, webhooks, hook mode) are your instructions.

2.2 Kyde will tell you if it believes an instruction breaches data protection law.

2.3 Kyde does not use your telemetry for its own purposes, except in aggregated form that does not identify you, your agents or any person (Terms 6.4).

## 3. Confidentiality

Everyone at Kyde with access to personal data is bound to confidentiality.

## 4. Security

Kyde implements the technical and organisational measures in Annex B and may update them if the level of protection does not decrease.

## 5. Sub-processors

5.1 You authorise the sub-processors in Annex C.

5.2 Kyde will tell you at least 30 days before adding or replacing a sub-processor, by email to claimed keys and on this page. You may object on reasonable data protection grounds. If no solution is found, you may revoke your keys.

5.3 Kyde imposes data protection obligations on each sub-processor that are equivalent to this DPA and remains responsible for them.

## 6. Transfers outside the EEA

Kyde processes your telemetry in Germany. Any transfer outside the EEA requires a valid transfer mechanism under Chapter V GDPR and notice under section 5.

## 7. Assistance

7.1 Kyde helps you, as far as it reasonably can, to respond to data subject requests. The Service lets you read records (GET /score/v0/records) and delete all data under a key (DELETE /score/v0/keys).

7.2 Kyde helps you with security, breach notification, impact assessments and prior consultation (Art. 32 to 36 GDPR) based on the information available to it.

## 8. Personal data breaches

Kyde notifies you without undue delay, and where feasible within 48 hours, after becoming aware of a personal data breach affecting your data. The notification goes to the claimed email of the affected keys.

## 9. Deletion

Call records are deleted after 90 days. The frozen baseline window is kept for the life of the key. Revoking a key deletes all data stored under it immediately. Backups are overwritten in the regular backup cycle.

## 10. Audits

Kyde provides the information needed to demonstrate compliance with this DPA. You may audit Kyde once a year with 30 days' notice, during business hours, at your own cost and under confidentiality, if the information provided is not sufficient.

## 11. Liability and precedence

Liability under this DPA follows the Terms. If this DPA conflicts with the Terms on data protection, this DPA prevails.

---

## Annex A: Processing details

| | |
|---|---|
| **Data subjects** | People who operate or are associated with the AI agents you monitor, such as developers and employees whose agent sessions send telemetry |
| **Categories of data** | Run identifiers (`session.id`, `prompt.id`, `request_id`, `tool_use_id`, `service.name`); tool-call metadata (tool name, success, error type, duration, input and result size in bytes, permission decision and its source); model name, token counts and estimated cost; hook execution metadata; terminal type; salted entity hashes computed on your side (`kyde.entity.*`, `kyde.args.digest`); timestamps. Optional webhook URL. |
| **Not processed** | Prompts, tool arguments, tool results, file contents, user email addresses, user and organisation IDs. These are dropped by a server-side allowlist before storage. |
| **Special categories** | None intended. |
| **Nature and purpose** | Storage, baseline learning, deterministic scoring, alarm generation, display in the dashboard and API, notification by webhook and email. |
| **Retention** | 90 days for call records; the baseline window for the life of the key; deletion on revocation. |

## Annex B: Technical and organisational measures

- **Data minimisation:** deny-by-default allowlist on arrival; no raw table; content and user identifiers are never stored.
- **Encryption in transit:** HTTPS (TLS) for all endpoints; webhooks HTTPS only and signed with HMAC-SHA256.
- **Access control:** access only with the scoring key; critical actions on claimed keys only through the dashboard with email sign-in; session cookie HttpOnly, Secure, 24-hour expiry; administrative server access limited to the founders.
- **Separation:** data is scoped per key.
- **Abuse protection:** rate limits per key and per IP; webhook targets restricted to public HTTPS hosts.
- **Hosting:** Hetzner Online GmbH data centres in Germany (ISO/IEC 27001 certified).
- **Availability:** regular backups.
- **Deletion:** automatic expiry after 90 days; immediate deletion on revocation.

## Annex C: Sub-processors

| Sub-processor | Location | Purpose |
|---|---|---|
| Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany | Germany | Server hosting and storage |
