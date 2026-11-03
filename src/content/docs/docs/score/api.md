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
| `POST` | `/v1/traces`, `/v1/logs`, `/v1/metrics` | OTLP/HTTP JSON ingest |
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

Coming soon: one POST per band change, signed with HMAC-SHA256. The URL is stored already.

:::note[Coming soon]
Payload format and signature header are documented once delivery is live. Until then, poll `/score/v0/scores` or use `get_scores` over MCP.
:::

## Delete everything

```bash
curl -s -X DELETE https://score.kyde.com/score/v0/keys -H "x-kyde-key: <KEY>"
```

The key and every record under it are gone in one request.
