---
title: "Kyde Score"
description: "How Kyde Score works: a per-agent baseline from the first 30 runs over at least 3 days, deterministic detectors, a 0 to 100 score per run and three bands."
---

Kyde Score is a hosted service at `score.kyde.com`. Your agents send OpenTelemetry. Kyde learns each agent's normal behavior and scores every later run against it.

## How it works

1. **Identify.** Each agent is one OpenTelemetry `service.name`. One key covers all agents under it.
2. **Learn.** The first 30 runs of an agent, spread over at least 3 days, become its baseline. Until then its status is `learning`.
3. **Score.** Every later run gets a score from 0 to 100. It counts the alarms of the last 20 runs, so an agent that settles back recovers. The detectors are plain statistics, no LLM: CUSUM for sudden shifts, windowed Jensen-Shannon divergence for slow drift, duplicate calls for loops, counted only when your exporter sends the parameter hash `kyde.args.digest`. A task-contract check flags a tool the agent never used for that task, from the first run.
4. **Tell.** Read the scores any time over the API or MCP. A signed webhook fires on every band change and every rebaseline.

## Bands

| Score | Band | Meaning |
| --- | --- | --- |
| 70 to 100 | `normal` | Consistent with the learned baseline |
| 40 to 69 | `watch` | Drifting, worth a look |
| 0 to 39 | `deviating` | Behavior has shifted from the baseline |

## Reproducible

The baseline is fingerprinted (`baseline_fingerprint`) and every score names the method it was computed with (`method_version`). Scores stay comparable over time. The base detectors (CUSUM, Jensen-Shannon divergence) are open source, the task-contract check is Kyde's own: [kydehq/behavioral-drift-detection](https://github.com/kydehq/behavioral-drift-detection).

## What Kyde reads

Call metadata only: which tool, in which order, how long, whether it failed. Attributes pass a deny-by-default allowlist before anything is stored. Prompts and payload bodies are never stored. See [Limits and privacy](/docs/score/limits/).

## Effect on the agent

None. Export is asynchronous. If Kyde is slow or down, the agent runs as before. Over a limit, Kyde drops records and marks the score degraded; it never returns an error to your exporter.

## Next

- [Quickstart](/docs/score/quickstart/): first score in a few minutes
- [Kyde Control](/docs/control/): stop an agent when its score falls
