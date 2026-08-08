---
title: "Kyde Gateway Documentation"
description: "The gateway behind the behavioral system of record for autonomous work: a drop-in, OpenAI-compatible proxy with a hash-chained behavioral ledger. Quickstart, user manual, deployment, and reference."
---

Nobody hands real responsibility to an agent nobody can trust. Agents
stay stuck waiting for human approval on every step, because when
something goes wrong, nobody can prove what happened. The provider's
log lives on their infrastructure, signed with their keys: the suspect
can't write the police report.

KYDE Gateway is a drop-in, OpenAI-compatible proxy that sits outside
the agent, in the path itself. Every action routed through it is recorded
into a hash-chained ledger (Ed25519-signed on the Enterprise edition),
independent of every model provider it fronts and written outside the
agent's runtime. If an agent can touch the record, it can rewrite it, so
the ledger is hash-chained: altering one entry breaks every entry after
it, and a third party can recompute that offline. And while it records, it sees what flows
upstream: your prompts, traces, and corrections, before they become
someone else's training data.

**One record. Every vendor. The behavioral system of record for autonomous work.**

**Two ways to start, same install, one switch:**

| | What it does | Setup |
|---|---|---|
| 🔍 **Observe** (start here) | Logs everything, blocks nothing. Zero risk, zero code changes. In week one you know: what your agents do, what leaves your house, what it costs. | One line: `export OPENAI_BASE_URL=http://localhost:4000/v1` — [Quickstart](/docs/quickstart/) |
| 🛡️ **Enforce** (when ready) | Flip DLP prevention per pattern and MCP tool allow/deny — out-of-scope requests get a 403 before they reach the upstream. | [Policy enforcement](/docs/reference/#policy-enforcement-dlp-prevention) |

## What it does

```
Agent ──► your-proxy:4000/v1 ──► OpenAI/Anthropic/Gemini/Copilot/any LLM
                │
                ▼
        Behavioral Ledger (Postgres, JSONB)
        ┌─────────────────────────────────────────────┐
        │ entry_id   │ timestamp │ agent_id           │
        │ action     │ model     │ why (context)      │
        │ tool_calls │ prev_hash │ entry_hash         │
        │ signature (Ed25519, Enterprise)             │
        └─────────────────────────────────────────────┘
```

Each entry is:
- **Hash-chained** — tampering with any past entry breaks all subsequent hashes
- **Causally linked** — captures the reasoning context (*why*) before every tool call
- **Signed** with Ed25519 on the Enterprise edition (hardware-rootable via PKCS#11 / HSM)

One gateway instance proxies **all supported providers simultaneously** —
OpenAI, Anthropic, Gemini, Copilot, and any local LLM. The upstream is
auto-detected from the request path; auth headers pass through untouched.
Full routing table: [reference](/docs/reference/#multi-provider-routing).

## Editions

The [quickstart](/docs/quickstart/) runs the **Starter** edition, the public
images from the [open GitHub repository](https://github.com/kydehq/gateway):
hash-chained but unsigned ledger, observe-only DLP. The **Enterprise** edition
adds Ed25519/TPM audit signing and inline enforcement, on the same compose
files — the edition is just an env-file switch. See
[deployment guide §3](/docs/deployment/#3-the-two-knobs-edition-and-posture)
and [enterprise support](/docs/deployment/#12-enterprise-support).

## Documentation map

| Guide | Covers |
| --- | --- |
| [Quickstart](/docs/quickstart/) | From `git clone` to your first ledger entry in about five minutes |
| [User manual](/docs/user-manual/) | Using the dashboard — roles, DLP alerts and policies, users, settings |
| [Deployment guide](/docs/deployment/) | Installing and operating the full stack — Docker Compose, editions, TLS, backups, upgrades |
| [Reference](/docs/reference/) | Provider routing, MCP routing, `config.yaml`, CLI, agent identity, ledger format |

Contributor documentation ([building images](https://github.com/kydehq/gateway/blob/main/docs/building-images.md),
[CI pipelines](https://github.com/kydehq/gateway/blob/main/docs/ci.md)) lives in the repository.

## What it doesn't do (yet)

- Semantic anomaly detection on the behavioral stream
- Multi-agent correlation (linking entries across agents in the same task)
- Policy enforcement based on ledger state (history-aware block/allow)
- Distributed ledger / external verification
- Streaming reassembly for tool call extraction (tool calls in streamed responses
  are captured but reconstruction is partial)

**This is our public Starter release — we want your feedback.**
Broke during setup? Missing a provider? Wondering whether you'd ever
flip enforcement on? [Open an issue](https://github.com/kydehq/gateway/issues/new/choose)
or write us: **feedback@kyde.com**. We read everything.
