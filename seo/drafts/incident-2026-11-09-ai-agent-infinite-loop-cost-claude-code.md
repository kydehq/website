---
status: PUBLISHED 2026-11-09 after Joerg's approval (published text differs, see "Changes before publication")
created: 2026-11-09
author: Kyde editorial draft (Radar)
primary_keyword: AI agent infinite loop cost
proposed_url: /incidents/claude-code-infinite-loop-cost/
meta_description: A Claude Code user reports that two conflicting hooks kept headless agent sessions retrying one blocked edit for six days at a cost of about $9,364; learn how the loop formed and how to cap it.
incident_dates: 2026-10-22 to 2026-10-28 loop window (reported by the operator)
disclosure_date: 2026-11-04 (GitHub issue anthropics/claude-code#107256)
vendor_response: none visible in the public thread as of 2026-11-09
canonical_placement: src/pages/incidents/claude-code-infinite-loop-cost.astro
---

# AI Agent Infinite Loop Cost: How a Claude Code Hook Deadlock Ran for Six Days

## AI agent infinite loop cost in a Claude Code incident report

On November 4, 2026, a Claude Code user filed a public bug report describing scheduled agent sessions that kept retrying the same refused file edit for six days. According to the report, the loop ran from October 22 to October 28, 2026, mostly in headless runs started by a scheduler, and consumed about $9,364 of extra usage through repeated automatic credit reloads. The reporter used Claude Code 2.1.312 with an Opus model on a Max plan with extra usage enabled. [1]

The reporter states up front that both hooks involved were their own configuration. They filed it as a product defect because nothing in the client, server or billing stopped a session that repeated one denied action thousands of times. As of November 9, the public thread shows no reply from Anthropic. The figures below come from the reporter and have not been independently confirmed. [1]

## How the loop formed, step by step

Claude Code lets operators attach hooks, small scripts that run at defined points in the agent's work. A Stop hook refused to let a turn end until the agent had written to a journal file, `BUILD_LOG.md`. A PreToolUse hook, which checks tool calls before they run, denied writes to paths it believed another session owned. [1]

The two rules collided on the same file. The Stop hook checked the journal through a symlink, while the ownership guard matched the real path and found a stale claim left by a session two weeks earlier. Each cycle therefore went the same way. The agent tried to edit the journal, the guard refused with "Another chat owns this path," the Stop hook blocked the end of the turn and asked for the journal write, and the agent tried the edit again. [1]

The reporter counts nine sessions in the loop window, seven of them scheduled runs. The worst session made roughly 10,000 refused edit attempts, and the next two made about 2,000 and 750. Across the loop sessions they estimate around 2.4 billion tokens, almost all cache reads of the same context. Automatic reload topped up credits 18 times between October 22 and 28, they say. [1]

The report does not say when or how the operator first noticed the loop, so the detection time is unknown. The reporter links two earlier open issues that describe similar Stop hook loops. [1][2][3]

## What the agent's behavior showed before the bill arrived

The clearest observable pattern in the report is repetition. The same tool, the same path and the same denial reason came back thousands of times in one session, and the reporter points out that the client already sees each of those refusals. A count of identical tool calls per session would have looked very different from a normal run. [1]

Token volume is a second signal. After the fix, the reporter measured 42.8 million tokens on November 4 and 60.2 million on November 5 up to 08:30 ET, compared with 6 to 18 billion per day during the loop. Based on the public write-up, a per-session comparison of call counts or tokens against earlier runs would likely have shown an abrupt change early in the window. That is an inference. The report does not publish per-hour data, and we cannot say how quickly any specific alert would have fired. [1]

## Steps you can take today

Give every hook that can block a turn its own retry limit. The reporter's fix releases the turn after three blocks in a session and writes a pending note instead. The counter lives in a state file keyed by session ID, because each hook runs as a separate process. [1]

Put a spend or turn ceiling outside the agent configuration for scheduled runs. One commenter on the thread notes that a breaker living in the same configuration that caused the loop can fail the same way, and suggests turning off automatic reload for scheduled runs until a built-in ceiling exists. [1]

Test hooks together, including path aliases. Write a harness that alternates the conflicting conditions and treats a symlink and its target as the same file, which is how the reporter verified that the fourth Stop evaluation now releases the turn. [1]

Alert on repeated identical denials and on token use per session, not only on the monthly bill. A monthly limit can be reached before anyone looks. [1]

## About Kyde Score

[Kyde Score](/score) reads an agent's OpenTelemetry, builds a baseline of how that agent normally behaves, and scores each session against it without an LLM in the checking path. An abrupt rise in tool calls or a burst of identical calls is the kind of change its sudden-change detector is designed to flag with a signed webhook, provided the agent exports those calls as telemetry and a baseline exists. Whether it would have caught this loop, and how early, depends on that setup. Entry is free at [score.kyde.com](https://score.kyde.com). For how this fits with tracing, see [agent observability and governance](/glossary/agent-observability-vs-governance/) and [behavioral drift](/behavioral-drift).

This report is useful because it is specific. One small configuration conflict, repeated without supervision, turned into a large bill, and the evidence of it sat in the agent's own tool calls the whole time.

## Sources

1. shaunrjenkins-cloud, GitHub issue opened November 4, 2026, with author follow-ups on November 4 and 5, [anthropics/claude-code#107256: Stop hook that keeps returning a block runs the agent indefinitely](https://github.com/anthropics/claude-code/issues/107256). Operator's own report; read November 9, 2026.
2. GitHub issue, May 3, 2026, [anthropics/claude-code#55754](https://github.com/anthropics/claude-code/issues/55754), as cited in [1]. Not read in full for this draft.
3. GitHub issue, [anthropics/claude-code#43906](https://github.com/anthropics/claude-code/issues/43906), as cited in [1]. Not read in full for this draft.
4. [Kyde Score](https://kyde.com/score) and [score.kyde.com](https://score.kyde.com), link targets verified November 9, 2026; product claims follow Joerg's November 7 briefing.

## Internal verification log (draft only, remove before publication)

Evidence labels: REPORTED = stated by the operator in the primary source, not independently verified; VERIFIED = visible in the public record itself; INFERENCE = editorial conditional analysis; RECOMMENDATION = proposed practice; UNKNOWN = not established by the public record.

| Claim or sentence group | Source and location | Status, uncertainty |
| --- | --- | --- |
| Title and H2: Claude Code hook deadlock, six days | [1] title and "Scale" | REPORTED. Six days = Oct 22 to 28 per reporter |
| P1: issue filed Nov 4, 2026 | [1] issue metadata | VERIFIED (disclosure date). Occurrence Oct 22 to 28 REPORTED |
| P1: headless scheduled runs, ~$9,364 extra usage via auto reload | [1] summary and "Scale" ($9,364.52 itemized loop-window portion; 18 reloads totalling $15,066.79 Oct 22 to 28) | REPORTED; no billing screenshots public; Anthropic has not confirmed |
| P1: Claude Code 2.1.312, Opus, Max plan with extra usage | [1] template fields and Additional Information | REPORTED. Exact Opus version UNKNOWN |
| P2: both hooks were the reporter's own; filed as product gap | [1] "What's Wrong?" | REPORTED |
| P2: no Anthropic reply in thread as of Nov 9 | [1] activity timeline as fetched Nov 9 | VERIFIED for the public thread only; private support contact exists per reporter (AI support agent declined, could not escalate) |
| P3: hook definitions, Stop hook requires journal write, PreToolUse denies owned paths | [1] Steps to Reproduce 1 to 2, Error Messages | REPORTED with public repro steps |
| P4: symlink vs real path, stale claim from session two weeks old, cycle sequence, exact denial text | [1] Steps 4 and final paragraph; Error Messages | REPORTED |
| P5: nine sessions, seven headless (`sdk-cli`) | [1] "Scale" | REPORTED; issue body also says "10 sessions" in log line; draft uses the "Scale" figure, discrepancy noted |
| P5: ~10,000 / ~2,000 / ~750 refused edits; ~2.4B tokens mostly cache reads; 18 reloads | [1] "Scale" | REPORTED |
| P6: detection time and method unknown | [1] full thread | UNKNOWN; not stated |
| P6: two earlier similar issues | [1] cites #55754 (May 3, 2026) and #43906 | REPORTED via [1]; [2][3] not independently reviewed; #43906 date not checked |
| P7: identical tool/path/reason repeated; client sees refusals | [1] "Why I think" item 2 | REPORTED; "would have looked very different" is INFERENCE |
| P8: 42.8M (Nov 4) and 60.2M (Nov 5 to 08:30 ET) vs 6B to 18B per day | [1] author comment Nov 5 | REPORTED. Post-fix numbers are not a pre-loop baseline |
| P8: per-session comparison likely abrupt change early | Editorial | INFERENCE; no per-hour data; no alert timing claimed |
| P9: breaker after three blocks, pending note, state file keyed by session ID, separate processes | [1] "What I changed" and Nov 4 author comment | REPORTED; real-session firing reported Nov 5 |
| P10: external ceiling; disable auto reload for scheduled runs | [1] comment by vijaym2k6, Nov 7 (discloses building SteerPlane) | REPORTED third-party suggestion; RECOMMENDATION. Vendor named in thread intentionally not mentioned in article |
| P11: harness alternating conditions; symlink test; fourth Stop releases | [1] Nov 4 author comment (exit codes [2,2,2,0,0,0]) | REPORTED; RECOMMENDATION |
| P12: alert on repeated denials and per-session tokens | [1] "What Should Happen?" plus editorial | RECOMMENDATION |
| Kyde paragraph: OTel, baseline, per-session scoring, no LLM, signed webhook, free entry | [4] and Joerg Nov 7 briefing | OWNER-SUPPLIED product description; no efficacy test on this incident |
| Kyde paragraph: sudden-change (CUSUM) flags abrupt rise / identical-call burst, conditional on telemetry and baseline | Joerg Nov 7 briefing | INFERENCE, explicitly conditional; no claim Kyde would have caught or prevented it; no killswitch; no AgentDojo figures |
| Closing paragraph | [1] plus editorial synthesis | INFERENCE |

### Editorial and placement checks

- Selection: genuine operational incident (looping and cost burn of a tool-using agent in real scheduled runs), primary source is the operator's GitHub issue with repro steps and follow-ups. Occurrence Oct 22 to 28 overlaps the 14-day window (Oct 26 to Nov 9); disclosure Nov 4 is inside it. Not a lab demo or benchmark.
- Root cause is the operator's own hook conflict. The article says so in the second paragraph and does not blame the vendor; the product-gap framing is attributed to the reporter.
- Not recycled: last draft (2026-11-07) covered WorkOS/ARTEX. No substantive new WorkOS development found this week.
- Alternative considered and rejected as article subject: openai/codex#59060 (Nov 3, Codex CLI asked to reboot a server reportedly edited fstab, systemd, containers; $10,000+ claimed). Primary source exists but the trace is not public, the thread is locked without vendor statement, and the loss figure is unexplained. Too thin for claim-by-claim verification.
- Confidence: medium. Mechanism is clear and reproducible from the public steps; all quantities and costs are self-reported; vendor silent.
- Voice DNA read at /workspace/kyde/repo/04_marketing/comms-rulebook/01-voice-dna.md, including §3 taboo list. Requested path 01-kyde-company/04_marketing/comms-rulebook/01-voice-dna.md is not present in this workspace. §12 (Editorial register) does not exist in the file; this draft follows Joerg's explicit Nov 7 briefing register.
- Internal links checked Nov 9 (HTTP 200): /behavioral-drift, /score, /glossary/agent-observability-vs-governance/ (also exists as website/src/pages/glossary/agent-observability-vs-governance.astro). No glossary entry on loops or cost exists; none invented.
- Product template's "one environment variable" setup claim omitted, consistent with the Nov 7 draft, because public /score setup lists several variables. Joerg to confirm before publication.
- Main keyword in title, first H2 and proposed URL slug.
- No live agent testing or reproduction, no contact with the reporter or Anthropic, no publication, no repository modification, commit or push, no spend, no Apollo, no Linear writes.
- Canonical relative location: 02-kyde-website/seo/drafts/incident-2026-11-09-ai-agent-infinite-loop-cost-claude-code.md. This file is a STAGING COPY under /workspace/kyde/radar-staging/, outside the website checkout; canonical placement and Joerg's approval PENDING.
- Article body word count (whitespace-delimited, title through closing paragraph, excluding metadata, sources and log): 895.

## Changes before publication (website agent, 2026-11-09)

- Placed under /incidents/ next to WorkOS, pattern "Looping", not /blog/.
- Keyword H2 "AI agent infinite loop cost in a Claude Code incident report" replaced by "What the operator reported"; keyword stays in title, H1, slug.
- Meta description shortened from 194 to about 145 characters.
- Harness test (P11) now attributed to a commenter (Zyph3rKeaton's suggestion, Nov 4); the reporter ran it ([2,2,2,0,0,0]).
- Date of #43906 checked: 2026-04-05. #55754: 2026-05-03.
- "would have looked very different" marked as our reading.
- Closing paragraph moved before the product line and rewritten as a summary, no punchline (Voice DNA §12.2, §12.3).
- Kyde paragraph replaced by one sentence (Joerg, 2026-11-09): "Kyde watches AI agents in production and quarantines one that stops behaving like itself." No detector claim, so the open question about kyde.args.digest in Claude Code telemetry does not apply.
- Internal links with trailing slash. Related: /agent-loop-detection/, /agent-drift-detection/, /incidents/workos-artex/.
- Note for the content bot: Voice DNA §12 exists in 01-kyde-company/04_marketing/comms-rulebook/01-voice-dna.md (since 2026-11-07). The staging workspace had an older copy.
