---
title: "Webhooks"
description: "KYDE Score webhooks: the events and their fields, verifying the signature, Slack in one step, test events, the delivery log and the retry rules."
---

KYDE Score sends you a POST when one of your agents changes. A webhook serves every agent under the key. Each event names its agent in `service_name`.

## Set it up

You can set the webhook in the dashboard under **notifications**, or with the API:

```bash
curl -s -X PATCH https://score.kyde.com/score/v0/keys \
  -H "x-kyde-key: <KEY>" -H 'content-type: application/json' \
  -d '{"webhook_url": "https://your.app/hooks/kyde"}'
```

The URL must use https and point to a public address.

## Slack in one step

Paste a Slack incoming-webhook URL (`https://hooks.slack.com/services/…`) as the webhook. Alerts then arrive as Slack messages. Each message carries the score and the band, plus the buttons **Yes, real issue**, **False alarm** and **We changed it**. You don't need a relay or any code.

To get one: in Slack, create an app, turn on **Incoming Webhooks**, choose a channel and copy the URL.

## Events

| `event` | When |
| --- | --- |
| `first_data` | The first run of a new agent arrives |
| `band_change` | The band changes, including the first score and a recovery to `normal` |
| `loop` | A runaway loop while the agent is still learning (no score yet) |
| `rebaseline` | A baseline was reset. Every reset is announced |
| `test` | You sent a test event from the dashboard |

Which `band_change` and `loop` events reach the webhook is set in the alert matrix in the dashboard. You can choose by kind (Loops, Off-task, Drift) and whether to include early warnings (`watch`). A `deviating` agent is never silent: if the matrix would deliver it nowhere, it goes to the email address anyway.

### `band_change`

```json
{
  "event": "band_change",
  "timestamp": "2026-11-09T14:02:11Z",
  "service_name": "claims-agent",
  "old_band": "watch",
  "new_band": "deviating",
  "score": 30,
  "runs_seen": 212,
  "detectors": ["divergence"],
  "alarm_id": "al_Xc2v9pQk3mZr",
  "feedback_url": "https://score.kyde.com/feedback/…",
  "after_rebaseline": false,
  "rebaselined_at": null,
  "method_version": "0.8.5"
}
```

| Field | Meaning |
| --- | --- |
| `new_band` | `normal` (70 and above), `watch` (40 to 69), `deviating` (below 40) |
| `old_band` | `null` on the first score |
| `detectors` | What caused it: `loop` (Loops), `contract` (Off-task), `divergence` and `cusum` (Drift) |
| `alarm_id` | Stable ID of this alert. It is the same in the mail, the dashboard and the weekly review |
| `feedback_url` | Present when we would like your verdict, otherwise `null`. Add `?v=real`, `?v=false_alarm` or `?v=intended`; the link opens a confirmation page. Your answer never changes a score |

### `loop`

```json
{
  "event": "loop",
  "timestamp": "2026-11-09T09:41:03Z",
  "service_name": "support-bot",
  "session_id": "run-8812",
  "tool_name": "search_orders",
  "duplicate_calls": 12,
  "score": null,
  "runs_seen": 8,
  "alarm_id": "al_…",
  "feedback_url": null,
  "method_version": "0.8.5"
}
```

## Verify the signature

Every POST carries `x-kyde-signature: sha256=<hex>`. That is HMAC-SHA256 of the raw request body, keyed with your scoring key. Compute it over the bytes you received, before parsing the JSON.

```python
import hashlib, hmac

def verify(body: bytes, header: str, key: str) -> bool:
    expected = "sha256=" + hmac.new(key.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, header or "")
```

```js
import crypto from "node:crypto";

export function verify(body, header, key) {
  const expected = "sha256=" + crypto.createHmac("sha256", key).update(body).digest("hex");
  return header?.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(header), Buffer.from(expected));
}
```

Slack messages are not signed this way. With Slack, the webhook URL itself is the secret.

## Test events

Under **notifications → test** in the dashboard, you can send four test events:

- the general one, which also sends a test mail
- Drift (`band_change` to `deviating`)
- Off-task (`band_change` with `contract`)
- Loop

Test events have the same shape as real ones, plus `"test": true`, and their agent is called `test-agent`. That lets you check your routing without waiting for a real alert. Filter on `test` so a test never pages anyone.

## Delivery log and retries

The dashboard lists every attempt under **notifications → deliveries**: time, event, HTTP status, duration and the exact body we sent. The log is kept for 30 days and is deleted together with the key.

Delivery is best effort. One attempt with a 5-second timeout, one retry after 30 seconds, then the event is dropped. Your endpoint should answer with any 2xx status quickly and do the work afterwards. If you must not miss a change, poll [`GET /score/v0/scores`](/docs/score/api/) as well. It always holds the current state.
