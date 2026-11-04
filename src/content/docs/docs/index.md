---
title: "Kyde Docs"
description: "Documentation for Kyde Score, the hosted behavioral score for AI agents, and Kyde Control, which stops agents in your network. Quickstarts, API, MCP, limits, deployment."
---

Kyde gives every AI agent a behavioral score. It learns how each agent normally works, scores every run against that, and tells you when an agent stops behaving like itself.

| | What it does | Start |
| --- | --- | --- |
| **Kyde Score** | Hosted, free to start. Send OpenTelemetry, get a 0 to 100 score per agent. Alerts on band change: coming soon. | [Quickstart](/docs/score/quickstart/) |
| **Kyde Control** | Runs in your network on the Kyde Gateway. Sits in the agent's path, stops and quarantines on a band change, writes a signed record. | [Overview](/docs/control/) |

Most teams start with Kyde Score on one agent and add Kyde Control for the agents they need to stop.

## Set up with your agent

Paste one sentence into your coding agent (Claude Code, Codex, Cursor and others):

```text
Set up score.kyde.com/skill.md
```

The agent reads the skill, creates a key, sets the environment variables and checks that data arrives. Details: [For agents](/docs/score/agents/).

For agents that read docs themselves: [llms.txt](https://score.kyde.com/llms.txt) · MCP server at `https://score.kyde.com/mcp`.

## Kyde Score

| Guide | Covers |
| --- | --- |
| [Overview](/docs/score/) | How the score works, bands, what is stored |
| [Quickstart](/docs/score/quickstart/) | Key, environment variables, first score |
| [For agents](/docs/score/agents/) | Skill, Claude Code plugin, MCP server |
| [API](/docs/score/api/) | Endpoints, response format, webhooks |
| [Limits and privacy](/docs/score/limits/) | Free tier limits, retention, deletion |

## Kyde Control

| Guide | Covers |
| --- | --- |
| [Overview](/docs/control/) | The gateway, its ledger, editions |
| [Quickstart](/docs/quickstart/) | From `git clone` to the first ledger entry in about five minutes |
| [User manual](/docs/user-manual/) | The dashboard: roles, alerts, policies, users, settings |
| [Deployment](/docs/deployment/) | Docker Compose, editions, TLS, backups, upgrades |
| [Reference](/docs/reference/) | Provider and MCP routing, `config.yaml`, CLI, ledger format |

## Source on GitHub

| Repository | What is in it |
| --- | --- |
| [kydehq/gateway](https://github.com/kydehq/gateway) | Kyde Control, the open-source gateway (sandbox edition) |
| [kydehq/behavioral-drift-detection](https://github.com/kydehq/behavioral-drift-detection) | The open drift detectors Kyde Score runs |
| [kydehq/kyde-score-skill](https://github.com/kydehq/kyde-score-skill) | The setup skill and MCP config for coding agents |
