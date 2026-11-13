---
title: "For agents"
description: "Let an AI agent set up Kyde Score by itself: one sentence, the skill file, the Claude Code plugin, the MCP server and llms.txt."
---

Kyde Score is built so an agent can set it up for its human. Pick one way.

## One sentence

Paste this into the agent you want monitored:

```text
Set up score.kyde.com/skill.md
```

The agent reads the skill, checks for an existing key, creates one if needed, sets the environment variables and verifies that data arrives. It asks you for a webhook URL and tells you if the key stays poll-only.

This works for any agent with a shell or an OpenTelemetry SDK, not only Claude Code: Grok CLI, Codex, OpenCode, or your own agent in Python or Node. The agent integrates itself; it should never install Claude Code or another agent product as a substitute. Setup is done when your agent appears in `get_scores`, not when the key or dashboard is active.

## Skill file

Save [score.kyde.com/skill.md](https://score.kyde.com/skill.md) as:

- `.claude/skills/kyde-score/SKILL.md` for one project
- `~/.claude/skills/kyde-score/SKILL.md` for all projects

## Claude Code plugin

The same skill as a plugin: [kydehq/kyde-score-skill](https://github.com/kydehq/kyde-score-skill).

## MCP server

A stateless MCP endpoint (Streamable HTTP) at `https://score.kyde.com/mcp`. With it, an agent can check its own score mid-session.

```bash
claude mcp add --transport http kyde-score https://score.kyde.com/mcp \
  --header "x-kyde-key: <KEY>"
```

Any other MCP client:

```json
{
  "mcpServers": {
    "kyde-score": {
      "type": "http",
      "url": "https://score.kyde.com/mcp",
      "headers": { "x-kyde-key": "<KEY>" }
    }
  }
}
```

| Tool | Does |
| --- | --- |
| `create_key` | Creates a key, optionally with a webhook URL |
| `get_scores` | Current score of every agent under the key |
| `set_webhook` | Adds or changes the webhook |
| `claim_key` | Attaches a human's email for the dashboard and human-only controls |
| `rebaseline` | Forgets an agent's baseline and relearns it from the next 30 runs over at least 3 days. History stays |
| `revoke_key` | Deletes the key and all its data. Requires `confirm: true` |

The key can also go in an `Authorization: Bearer` header or the `key` tool argument.

:::caution
`revoke_key` deletes everything under the key at once. An agent should only call it when its human asks.
:::

## llms.txt

The whole integration in one plain text file for any LLM: [score.kyde.com/llms.txt](https://score.kyde.com/llms.txt).
