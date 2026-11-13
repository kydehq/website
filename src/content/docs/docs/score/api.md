---
title: "API"
description: "Kyde Score API: create, change and delete keys, OTLP ingest, read scores, the response format and the band-change webhook."
---

Base URL: `https://score.kyde.com`. Authentication: the `x-kyde-key` header. Machine-readable schema: [openapi.json](https://score.kyde.com/openapi.json), interactive reference: [score.kyde.com/docs](https://score.kyde.com/docs).

## Endpoints

| Method | Path | Does |
| --- | --- | --- |
| `POST` | `/score/v0/keys` | Create a key. Optional body `{"webhook_url": "https://…"}` |
| `PATCH` | `/score/v0/keys` | Add or change the webhook |
| `DELETE` | `/score/v0/keys` | Revoke the key and delete all its data |
| `POST` | `/v1/traces`, `/v1/logs`, `/v1/metrics` | OTLP/HTTP ingest, JSON or protobuf |
| `GET` | `/score/v0/scores` | Current score per agent |

## Read scores

```bash
curl -s https://score.kyde.com/score/v0/scores -H "x-kyde-key: <KEY>"
```

```json
{
  "method_version": "…",
  "webhook": "https://your.app/hooks/kyde",
  "agents": [
    {
      "service_name": "invoice-agent",
      "status": "scored",
      "score": 38,
      "band": "deviating",
      "alarms": [],
      "runs_seen": 412,
      "runs_needed": 30,
      "n_baseline_records": 3120,
      "n_live_records": 9840,
      "baseline_fingerprint": "…",
      "method_version": "…"
    }
  ]
}
```

| Field | Meaning |
| --- | --- |
| `status` | `learning` until `runs_needed` runs are seen, then `scored` |
| `score`, `band` | 0 to 100 and `normal`, `watch` or `deviating`. `null` while learning |
| `alarms` | What the detectors flagged |
| `baseline_fingerprint` | Identifies the frozen baseline the score is measured against |
| `webhook` | `null` means poll-only: band changes reach nobody |
| `degraded` | Only present when records were dropped today, with `reason` and `dropped_today` |

## Webhook

```bash
curl -s -X PATCH https://score.kyde.com/score/v0/keys \
  -H "x-kyde-key: <KEY>" -H 'content-type: application/json' \
  -d '{"webhook_url": "https://your.app/hooks/kyde"}'
```

Kyde posts on every band change, the first score and a recovery included, and on every rebaseline. One webhook serves all agents under the key; filter by `service_name`.

```json
{"event": "band_change", "service_name": "support-agent", "old_band": "normal",
 "new_band": "deviating", "score": 30, "runs_seen": 42,
 "after_rebaseline": false, "rebaselined_at": null}
```

**Verify:** the header `x-kyde-signature` carries `sha256=<hex>`, the HMAC-SHA256 of the raw body, keyed with your scoring key. Delivery is best effort: one attempt, one retry after 30 seconds. Poll `/score/v0/scores` if you must not miss a change.

All events and fields, verification code, Slack in one step, test events and the delivery log: [Webhooks](/docs/score/webhooks/).

## Rebaseline

```bash
curl -s -X POST https://score.kyde.com/score/v0/agents/<service_name>/rebaseline \
  -H "x-kyde-key: <KEY>"
```

For an intended change, such as a new model or a new task, that left an agent deviating. Kyde forgets the baseline and learns it again from the next 30 runs over at least 3 days. Records and alarms stay stored, and the agent carries `rebaselined_at` from then on.

## Delete everything

```bash
curl -s -X DELETE https://score.kyde.com/score/v0/keys -H "x-kyde-key: <KEY>"
```

The key and every record under it are gone in one request.
