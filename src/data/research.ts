// Studies of kyde.com/research (Kyde Research). One entry per study: a name,
// the research question, the finding as one sentence, one sentence of setup,
// the numbers, limitations and where they come from.
// Rules (01-kyde-company/04_marketing/website/2026-11-03-measures-seite-plan.md):
// real numbers only, every study dated with runs and source, the agent is
// measured, never the model (D-038). status "draft" until Jürgen confirmed.
//
// Source of every number: kydehq/behavioral-drift-detection,
// experiments/results, commit 990bfef (2026-10-27).

export const RESULTS = "https://github.com/kydehq/behavioral-drift-detection/blob/main/experiments/results";
export const REPO = "https://github.com/kydehq/behavioral-drift-detection";
export const MEASURED = "2026-10-27";
export const METHOD = "990bfef";

export type Cell = string | number;
export interface Study {
  id: string;
  /** short name of the study, also the table of contents entry */
  name: string;
  /** the research question the study answers */
  question: string;
  /** the finding, one sentence */
  finding: string;
  intro: string;
  columns: { label: string; num?: boolean }[];
  rows: Cell[][];
  /** row indexes to mark (the rows the finding is about) */
  mark?: number[];
  /** limitations and how to read the numbers */
  note?: string;
  runs?: number;
  /** runs already counted in another study (left out of the page total) */
  runsCounted?: false;
  corpus: string;
  source: string;
  status: "draft" | "live";
}

export const studies: Study[] = [
  {
    id: "model-switch",
    name: "Model changes and behavioral drift",
    question: "Does changing the underlying model change how an agent behaves?",
    finding: "A new model can change how the same agent works. Or barely at all.",
    intro:
      "Tool-use distribution of the same agent framework on SWE-bench, before and after the model behind it changed. 0 means identical, 1 means nothing in common.",
    columns: [
      { label: "Framework" },
      { label: "Before" },
      { label: "After" },
      { label: "Runs after", num: true },
      { label: "Tool-use shift (JSD)", num: true },
    ],
    rows: [
      ["SWE-agent", "Claude 3 Opus, 2024-04", "GPT-4, 2024-04", 496, "0.085"],
      ["SWE-agent", "GPT-4, 2024-04", "Claude 3.5 Sonnet, 2024-06", 500, "0.116"],
      ["SWE-agent", "Claude 3.5 Sonnet, 2024-06", "GPT-4o, 2024-07", 465, "0.091"],
      ["SWE-agent", "GPT-4o, 2024-07", "SWE-agent-LM-32B, 2025-05", 500, "0.813"],
      ["OpenHands", "Claude 4 Sonnet, 2025-05", "Kimi K2, 2025-07", 500, "0.002"],
      ["OpenHands", "Kimi K2, 2025-07", "GPT-5, 2025-08", 500, "0.105"],
      ["Emergent", "2024-10", "2024-12, same setup", 500, "0.000"],
    ],
    mark: [1, 3, 5],
    note: "Separate SWE-bench submissions, not one deployment over time. The last row is the control: no change, no shift.",
    runs: 3461,
    corpus: "SWE-bench submission logs",
    source: "swebench-two-regime.md",
    status: "draft",
  },
  {
    id: "trace-blind-spot",
    name: "What telemetry fails to capture",
    question: "How much of an agent's failure is visible in its own telemetry?",
    finding: "About 1 in 18 errors a human finds also shows up as an error in the trace.",
    intro:
      "Errors that human annotators marked in agent runs, and how many of them the run's own telemetry flagged with an error status.",
    columns: [
      { label: "Benchmark" },
      { label: "Agent model" },
      { label: "Runs", num: true },
      { label: "Errors found by humans", num: true },
      { label: "Also flagged in trace", num: true },
      { label: "Share", num: true },
    ],
    rows: [
      ["GAIA", "o3-mini", 117, 585, 34, "5.8 %"],
      ["SWE-bench", "Claude 3.7 Sonnet", 31, 256, 14, "5.5 %"],
    ],
    mark: [0, 1],
    note: "One record per OpenTelemetry span. An error status alone misses most of what went wrong: most of what humans flag is a judgment about meaning, which none of the deterministic detectors we tested could see.",
    runs: 148,
    corpus: "TRAIL",
    source: "trail-context-decay.md",
    status: "draft",
  },
  {
    id: "run-length",
    name: "Errors over the course of a run",
    question: "Does the probability of failure increase with run length?",
    finding: "Long runs fail more: errors rise twelvefold over the first 40 steps.",
    intro: "Share of calls with an error status, by how far into the run they happen. One GAIA agent, 117 runs.",
    columns: [
      { label: "Steps into the run" },
      { label: "Calls", num: true },
      { label: "Error status", num: true },
    ],
    rows: [
      ["0 to 9", 1170, "2.1 %"],
      ["10 to 19", 663, "7.1 %"],
      ["20 to 29", 409, "16.4 %"],
      ["30 to 39", 321, "25.5 %"],
      ["40 to 49", 237, "21.9 %"],
      ["50 to 59", 184, "15.2 %"],
      ["60 to 69", 143, "11.2 %"],
    ],
    mark: [3],
    note: "Later steps are left out: below 140 calls per bin the rate is noise.",
    runs: 117,
    runsCounted: false,
    corpus: "TRAIL, GAIA, o3-mini (117 of the 148 TRAIL runs in T2)",
    source: "trail-context-decay.md",
    status: "draft",
  },
  {
    id: "injections",
    name: "Detecting prompt injection",
    question: "Can prompt injection be seen in what an agent does, or only in what it reads?",
    finding: "Injected instructions are in the content, not in the call pattern.",
    intro:
      "AgentDojo attacks on agents built on different models. Detection from call metadata alone, and from the text the tools returned.",
    columns: [
      { label: "Agent model" },
      { label: "Attacked runs", num: true },
      { label: "Caught from metadata", num: true },
      { label: "Caught from tool text", num: true },
      { label: "False alarms, tool text", num: true },
    ],
    rows: [
      ["Claude 3 Opus", 321, "0.0 %", "94.1 %", "4.3 %"],
      ["Claude 3.5 Sonnet", 484, "3.8 %", "91.5 %", "3.6 %"],
      ["Claude 3.7 Sonnet", 765, "3.0 %", "98.0 %", "7.3 %"],
      ["Gemini 1.5 Pro 002", 490, "1.5 %", "88.2 %", "6.7 %"],
      ["Gemini 2.0 Flash", 475, "0.7 %", "88.8 %", "4.3 %"],
      ["GPT-4 Turbo", 491, "0.0 %", "88.6 %", "3.3 %"],
      ["GPT-4o", 5436, "3.3 %", "88.2 %", "3.0 %"],
      ["GPT-4o mini", 496, "4.9 %", "90.5 %", "8.2 %"],
      ["Llama 3.3 70B", 1833, "1.6 %", "84.6 %", "5.4 %"],
      ["All 29 pipelines", 24434, "", "86.2 %", "4.5 %"],
    ],
    mark: [9],
    note: "Tool-text detection: six fixed patterns, built on a 20 % split, measured on the other 80 %. Metadata column: successful injections only.",
    runs: 27036,
    corpus: "AgentDojo",
    source: "l2-agentdojo-injection.md",
    status: "draft",
  },
  {
    id: "reward-hacking",
    name: "Reward hacking",
    question: "When an agent games its grader, what gives it away?",
    finding: "Agents that game the test say so in their reasoning.",
    intro:
      "Terminal Wrench runs where the agent exploited the grader instead of solving the task. Detection from tool calls, and from the agent's own reasoning text.",
    columns: [
      { label: "Agent model" },
      { label: "Hacked runs", num: true },
      { label: "Caught from tool calls", num: true },
      { label: "Caught from reasoning", num: true },
      { label: "False alarms", num: true },
    ],
    rows: [
      ["Claude Opus 4.6", 590, "0.0 %", "98.6 %", "0.2 %"],
      ["Gemini 3.1 Pro", 1181, "0.0 %", "97.5 %", "1.2 %"],
      ["GPT-5.4", 783, "0.0 %", "99.7 %", "0.5 %"],
    ],
    note: "These agents narrate their exploits openly. On TRACE, a second corpus whose agents had no reason to narrate, the same approach fell to 1.5 to 1.9 %, the base rate. A ceiling, not a guarantee.",
    runs: 4415,
    corpus: "Terminal Wrench",
    source: "l3-terminalwrench-rewardhack.md",
    status: "draft",
  },
  {
    id: "cli-updates",
    name: "Behavioral stability across tool updates",
    question: "Do tool updates measurably change agent behavior?",
    finding: "Claude Code updates shifted tool use no more than a day without one.",
    intro:
      "Real Claude Code sessions of 171 users. Tool-use shift across 19 version updates, against the same measurement at points with no update.",
    columns: [
      { label: "Comparison" },
      { label: "Cases", num: true },
      { label: "Median shift (JSD)", num: true },
    ],
    rows: [
      ["Across a version update", 19, "0.132"],
      ["Control, no update", 65, "0.127"],
      ["Same user, adjacent periods", 58, "0.149"],
      ["Same user, first vs. last period", 34, "0.211"],
      ["Different users", 1653, "0.358"],
    ],
    mark: [0, 1],
    note: "A result we did not expect. Behavior within a user varies as much as across an update, while each user's agent keeps its own fingerprint: different users are more than twice as far apart. Baselines therefore have to be per agent, and they age within weeks.",
    runs: 4771,
    corpus: "SWE-chat, Claude Code sessions of 171 users",
    source: "swechat-real-timelines.md",
    status: "draft",
  },
];
