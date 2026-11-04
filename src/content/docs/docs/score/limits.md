---
title: "Limits and privacy"
description: "Kyde Score free tier limits as the service enforces them, what happens over quota, what is stored, retention and deletion."
---

## Limits

These are the limits the service enforces, per key. There are no accounts.

| Limit | Value | Over the limit |
| --- | --- | --- |
| Records | 100,000 a day | Records are dropped, the score is marked `degraded` |
| Ingest requests | 60 a minute | Retryable `429`; OTLP exporters retry on their own |
| Agents | 200 per key | One `service.name` each |
| Request size | 4 MB | Batch below that |
| New keys | 5 an hour per IP | Use one key per team, not per agent |
| Retention | 90 days | Older records are deleted |
| Idle keys | 30 days | A key that never received data expires |

Every limit degrades instead of breaking. Kyde never turns your agent's export into an error.

Need higher limits, your own retention or everything inside your network? That is [Kyde Control](/lab-draft/pricing/).

## Privacy

- **What is stored:** call metadata. Which tool, in which order, duration, success or error.
- **What is not stored:** prompts, model outputs, payload bodies. Attributes pass a deny-by-default allowlist before storage.
- **Before export:** with an OpenTelemetry Collector you can delete or hash attributes first. Kyde still scores.
- **Where:** the hosted service runs in the EU.
- **Deletion:** `DELETE /score/v0/keys` removes the key and all its records at once. See [API](/docs/score/api/#delete-everything).
