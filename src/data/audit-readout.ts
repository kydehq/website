// A real audit readout from KYDE's own gateway, published as the specimen on
// /audit-readout. Everything here is data so the whole document can be replaced
// by a later run without touching the page that renders it.
//
// Provenance rule for this file: no number goes in that the readout did not
// produce. Where the readout itself withholds a figure, `figure` stays null and
// the page prints the reason instead of rounding up.

export type Metric = { value: string; label: string };
export type Finding = {
    kind: "capability" | "evidence" | "economics";
    statement: string;
    metrics: Metric[];
    caveat?: string;
    rowsHref: string;
    rowsLabel: string;
};
export type Check = { status: "clear" | "found"; question: string; fires: string; note?: string };
export type Limit = { title: string; figure: string | null; body: string; source: string };

export const readout = {
    // Where the document came from. Named so a reader never has to guess whether
    // this is a mock-up or somebody's real estate.
    source: "KYDE's own gateway",
    windowStart: "15 July 2026",
    read: "6 August 2026",

    headline:
        "16 of your 18 agents run under an id nobody has claimed — on the record, and not attributable to a person or a team.",
    basis: "From 160 actions recorded since 15 July 2026.",
    coverage:
        "Computed on 88.9% of the 144 requests this gateway metered. The rest were counted and not recorded.",
    headlineMetrics: [
        { value: "16", label: "unclaimed" },
        { value: "18", label: "on the record" },
    ] as Metric[],

    findings: [
        {
            kind: "capability",
            statement:
                "Your agents call 2 models across 5 providers. Every one is a separate contract, a separate log, and a separate place your prompts go.",
            metrics: [
                { value: "2", label: "models" },
                { value: "5", label: "providers" },
            ],
            rowsHref: "#rows-token-share",
            rowsLabel: "See token share by model",
        },
        {
            kind: "capability",
            statement:
                "14 of your 18 agents have no rule written about them at all. By the gateway's own default, they reach everything.",
            metrics: [
                { value: "0", label: "open to any asker" },
                { value: "5", label: "tools reachable" },
                { value: "3", label: "systems" },
            ],
            caveat:
                "The tool catalogue is a five-minute in-memory cache seeded in the gateway process, and it was cold when this was read. Only tools a policy row names are counted, so the real estate is at least this large — not at most.",
            rowsHref: "#rows-reach-map",
            rowsLabel: "Open the reach map",
        },
        {
            kind: "evidence",
            statement:
                "Not one of your 18 agents has done enough to be judged. The busiest has 30 requests behind it and a score needs 120, so every trust figure on this deployment is still blank rather than flattering.",
            metrics: [
                { value: "18", label: "agents, none scored" },
                { value: "30/120", label: "busiest" },
            ],
            caveat:
                "This is not a fault. Every dimension of the score starts at 100 and only falls, so a quiet agent would score near-perfectly for having done nothing — the figure is withheld rather than published and disclaimed.",
            rowsHref: "#rows-agent-roster",
            rowsLabel: "Go to the agent roster",
        },
        {
            kind: "evidence",
            statement:
                "Your 160 entries prove the order things happened in, and not who wrote them down. Unsigned, a dispute about this record comes down to our word rather than your key. 16 requests were counted and never recorded — the gateway knows they happened and nothing about what was in them.",
            metrics: [
                { value: "160", label: "entries chained" },
                { value: "Unsigned", label: "no proof of origin" },
                { value: "16", label: "counted, not recorded" },
            ],
            rowsHref: "#rows-integrity",
            rowsLabel: "Go to the integrity report",
        },
        {
            kind: "economics",
            statement:
                "153e1f30e02c and 3c955fced0e9 are permitted the same 5 tools. One of them burned 87× the tokens of the other.",
            metrics: [
                { value: "87×", label: "the consumption" },
                { value: "5", label: "tools, both" },
            ],
            rowsHref: "#rows-token-table",
            rowsLabel: "Go to the token table",
        },
        {
            kind: "economics",
            statement:
                "153e1f30e02c accounts for 41% of every token this estate spent, against 6 other agents sharing the rest.",
            metrics: [
                { value: "41%", label: "of all tokens" },
                { value: "122,498", label: "tokens" },
                { value: "≈ €2.49", label: "estimated" },
            ],
            caveat:
                "The share is measured; the euro figure is not. The gateway's pricing table was dropped in migration 0020, so it is this estate's own model mix priced at estimated rates (lib/model-rates.ts) and blended across agents.",
            rowsHref: "#rows-token-activity",
            rowsLabel: "Go to token activity",
        },
    ] as Finding[],

    checksIntro:
        "11 conditions were evaluated against this deployment's own rows. A condition that did not hold is a result, not a gap — and where one turns on a number rather than on a fact, the number and the reason for it are below.",

    checks: [
        {
            status: "clear",
            question: "Does the record still verify?",
            fires: "Fires when any hash link in the ledger no longer follows from the one before it.",
        },
        {
            status: "found",
            question: "Is every actor somebody's responsibility?",
            fires: "Fires when at least one agent has no display_name — it announced an id and nobody has named it since.",
        },
        {
            status: "found",
            question: "What may an agent reach without a decision being made?",
            fires: "Fires when at least one connected tool has no deny rule naming it, or at least one agent has no rule written about it at all.",
        },
        {
            status: "clear",
            question: "Was anything caught and then let through?",
            fires: "Fires when enforcement is off and at least one alert is not closed.",
        },
        {
            status: "clear",
            question: "Is any agent's score held down by a veto rather than an average?",
            fires: "Fires when an agent's trust score carries a cap_reason of security — its Security dimension is under the floor, and the other four cannot lift it.",
        },
        {
            status: "found",
            question: "Has any agent done enough to be judged at all?",
            fires: "Fires when no agent has reached the evidence floor, so every trust figure on the deployment is withheld rather than published.",
            note: "A penalty-only score on a quiet agent reports that nothing was recorded against it, not that it earned anything. The floor of 120 is the Autonomy Trust Ladder's own requirement before an agent may run defined workflows, so this product's two standards agree rather than inventing a second number.",
        },
        {
            status: "found",
            question: "Can the record prove who wrote it, not only the order?",
            fires: "Fires when the ledger has entries and is unsigned, or a traffic path is recording counts only.",
        },
        {
            status: "found",
            question: "How many places do your prompts go?",
            fires: "Fires when at least 3 models, or at least 2 providers, were actually called.",
            note: "The count alone is not the finding — a thin tail is. A model carrying under 5% of traffic is drift nobody decided on; an even split across three is a choice somebody made.",
        },
        {
            status: "found",
            question: "Is one actor carrying the bill?",
            fires: "Fires when one agent's share of all tokens is above 50%, or at least 40% while 4 or more agents share the rest.",
            note: "Above 50% one actor outspends every other put together, which is a fact rather than a reading. Below it, a share only means something against the number of agents sharing it: 40% among two is an even split, among 4 it is well past a fair share.",
        },
        {
            status: "found",
            question: "Do two agents permitted the same tools consume the same way?",
            fires: "Fires when two agents with identical open reach differ by 4× or more in tokens.",
            note: "4× is where a gap stops being explainable as workload and becomes worth asking about. It is the loosest number here and the one most worth arguing with — measured in tokens, so no estimated rate is involved either way.",
        },
        {
            status: "clear",
            question: "Did the spend buy work, or conversation?",
            fires: "Fires when tool calls are under 20% of what the ledger recorded.",
            note: "An estate that does work is not a finding, so this only fires when most of what was recorded was conversation. 20% is a floor, not a target — nothing here says a higher ratio is better.",
        },
    ] as Check[],

    limits: [
        {
            title: "Counted, not recorded",
            figure: "16 requests · 11.1%",
            body: "2 paths — models_list, unknown — record that a call happened and nothing about what was in it. No content, no tokens, no chain entry. Flipping a path to full logging closes this without touching the agent.",
            source: "/api/agent-traffic, summed over request counts rather than meters. The chat path is excluded because it is always fully logged whatever its stored mode says.",
        },
        {
            title: "Recorded, not connected",
            figure: "37 rows · 23.1%",
            body: "Tool calls through MCP are written and hash-chained like everything else, but carry no session id — so they never appear on Sessions, they are missing from every agent's session count, and no tool call can be followed back to the conversation that caused it.",
            source: "/api/stats action_types, the mcp_* keys against the window total. The gap is in mcp_ledger, which writes an empty session id on every row.",
        },
        {
            title: "The tool catalogue is cold",
            figure: null,
            body: "The catalogue is a five-minute in-memory cache, and the process that answers the dashboard is not the process agent traffic passes through — so it warms only when an operator runs probe-tools. While it is cold, the estate shown is only the tools a policy row names: a lower bound with no denominator.",
            source: "/api/mcp/aggregator/catalog returned no items. There is no figure here because a cold cache has no total to be a fraction of.",
        },
        {
            title: "Inside the provider",
            figure: null,
            body: "A model's own reasoning, its sub-agent delegation and its provider-native connectors run where this gateway is not. Nothing on this board describes them, and no figure here is a fraction of them.",
            source: "None, and that is the point: an execution path the boundary never sees leaves no row to count. Stated without a figure rather than left out.",
        },
    ] as Limit[],
};

export const heldCount = readout.checks.filter((c) => c.status === "clear").length;
export const foundCount = readout.checks.filter((c) => c.status === "found").length;
