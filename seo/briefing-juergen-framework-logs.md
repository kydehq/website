# Briefing Jürgen — Framework-Logs für die Integrations-Docs

**Worum es geht:** Wir bauen unter `kyde.com/docs` Integrations-Seiten nach dem Muster
"Governance for [Framework] agents" (LangChain, CrewAI, n8n, ...). Damit die Seiten
nicht austauschbarer Template-Content sind, braucht jede Seite **einen echten,
einzigartigen Datenpunkt: einen echten Ledger-Eintrag aus genau diesem Framework**.
Das ist das Einzige, was uns fehlt — Template und Texte macht die Website-Seite.

## Was wir pro Framework brauchen

Ein echter Lauf des Frameworks durch das Kyde Gateway (Starter-Edition reicht,
lokales Docker-Compose-Setup aus dem Quickstart genügt). Daraus:

1. **Die funktionierende Anbindung** — die 2–5 Zeilen Config/Env, mit denen genau
   dieses Framework durchs Gateway läuft (Base-URL-Override, Header, was auch immer
   nötig war). Bitte mit Framework-Version notieren.
2. **Ein Ledger-Eintrag als JSON** aus diesem Lauf — mit `agent_id`, `action`,
   `model`, `tool_calls`, Kontext (`why`), `prev_hash`/`entry_hash`.
   Bitte bereinigt: keine echten API-Keys, keine echten Daten im Prompt.
3. **Die Eigenheiten** — 2–3 Stichpunkte: Was macht dieses Framework anders?
   (Streaming? Tool-Call-Format? Eigene Header? MCP? Wo setzt man `X-Agent-ID`?)
4. **Optional:** Ein Dashboard-Screenshot, der den Eintrag zeigt.

**Format:** Ein Ordner (oder Gist) pro Framework mit `config.md` + `ledger-entry.json`
+ `notes.md` (+ Screenshot). Mehr Struktur braucht es nicht.

## Reihenfolge (nach Marktrelevanz, oben anfangen)

1. LangChain / LangGraph
2. OpenAI Agents SDK
3. CrewAI
4. Anthropic MCP (Claude Code / Claude SDK)
5. n8n
6. AutoGen
7. LlamaIndex
8. Semantic Kernel
9. Microsoft Copilot Studio
10. Google Vertex AI Agent Builder
11. AWS Bedrock Agents

Die ersten 4–5 reichen für die erste Welle. Aufwand pro Framework schätzungsweise
30–60 Minuten, sobald das Gateway einmal läuft.

**Wichtig:** Lieber 4 Frameworks mit echten Logs als 11 ohne. Ohne echten
Ledger-Eintrag bauen wir die Seite nicht (Thin-Content-Risiko bei Google und
AI-Engines).
