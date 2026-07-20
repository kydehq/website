---
title: "Quickstart"
description: "Run the Kyde Gateway with Docker Compose in about five minutes: start the stack, point your agent at it with one environment variable, and see the first entry in the behavioral ledger."
---

The stack is five containers: the LLM proxy, the admin API, the dashboard UI,
a regex DLP engine, and Postgres for the ledger. Both options below end in the
same place — pick one.

## Option A — Run the published images (recommended)

Pulls the latest public images from GHCR; nothing is built on your host, and
only the UI is published — loopback-only, production posture out of the box.

```bash
git clone https://github.com/kydehq/gateway.git
cd gateway

cp .env.starter.example .env.starter
# Edit .env.starter: set POSTGRES_PASSWORD (e.g. `openssl rand -base64 32`)

docker compose --env-file .env.starter \
  -f docker-compose.yml -f docker-compose.prod.yml up -d
```

:::caution
Keep the file named `.env.starter` — do **not** copy it to `.env`.
Compose auto-loads `.env` into *every* invocation, including the dev stack,
and `POSTGRES_PASSWORD` only takes effect when the Postgres volume is first
created — changing it later locks the services out of an existing database.
:::

## Option B — Build from source

Builds the gateway and UI images from the repo and additionally publishes
each service's port directly to the host (gateway `8081`, admin API `8501`,
DLP regex `8002`, Postgres loopback `5432`) — handy for development.

```bash
git clone https://github.com/kydehq/gateway.git
cd gateway

docker compose up -d --build
```

## Verify (both options)

```bash
curl -fsS http://localhost:4000/health                              # LLM proxy
curl -fsS -o /dev/null -w "%{http_code}\n" http://localhost:8080/   # admin UI → 200
docker compose ps                                                    # everything "healthy"
```

All services should be healthy within ~40 seconds.

## Point your agent at it

One line — the gateway forwards your real API key untouched:

```bash
# OpenAI-style clients (VS Code, Cursor, most SDKs)
export OPENAI_BASE_URL=http://localhost:4000/v1

# Anthropic-style clients (Claude Code, Claude SDK)
export ANTHROPIC_BASE_URL=http://localhost:4000
```

Optionally name your agent with an `X-Agent-ID` header; without it the gateway
derives a stable pseudonymous ID from the API key hash
([details](/docs/reference/#agent-identity)).

## See it in the ledger

Open **`http://localhost:8080/`** — on first start the UI routes you to `/setup`
to create the admin account. Run your agent once, refresh the dashboard: the
request is there, hash-chained into the ledger, with its causal context, tool
calls, token counts, and DLP findings.

That's the whole pitch in one screen. From here: TLS, backups, upgrades, and
the optional neural-DLP / validator services are in the
[deployment guide](/docs/deployment/).

## Development (pip install)

For hacking on the proxy itself, or embedding it in an existing Python
environment, you can skip the containers:

```bash
pip install -e .        # installs the `kyde` CLI
kyde keygen             # generate a signing keypair (~/.agent-ledger/)
kyde serve --port 8000  # start the proxy
```

This runs the bare proxy without the dashboard UI, DLP sidecars, or Postgres
ledger — see [deployment guide §8](/docs/deployment/#8-deployment-b--local-pip-install)
for wiring those up individually, and the [CLI reference](/docs/reference/#cli).
