// The site's own content index, in one place.
//
// These three lists used to live inline in the pages that render them. They
// have a second reader now — /site-index.json, which is what the WebMCP tools
// in WebMcpTools.astro search — and a list with two readers that is declared
// twice is a list that will disagree with itself by Christmas. Same reason
// LOCALE_PAIRS lives in locales.ts rather than on the pages.
//
// Adding a page: add it here, and it appears on the hub, in the JSON index,
// and in the agent-facing search at once.
//
// `live` and `readTime` are display fields carried by some rows and not
// others; nothing filters on them. They are typed optional for that reason,
// rather than because anything reads them as a flag.

export type Article = {
  category: string;
  title: string;
  summary: string;
  href: string;
  readTime?: string;
  live?: boolean;
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  teaser: string;
};

export const ARTICLES: Article[] = [
    {
        category: "Research · Note",
        title: "Behavioral Drift in AI Agents: Seven Forms and What Your Logs Can Show",
        summary: "Behavioral drift is not a single, well-defined phenomenon. At least seven related ways agent behavior can change, our synthesis rather than an established taxonomy: drift can be inherited between agents, agents can stop before the work is done, and reward hacking is related but different. Which signals are visible in production logs, at what cost, and where the evidence is still missing.",
        href: "/behavioral-drift",
    },
    {
        category: "Insurance · Liability · Complete Guide",
        title: "AI Agent Insurance: Liability, Coverage, and the Evidence Infrastructure",
        summary: "How liability is assigned under EU law (AI Act, PLD 2024, DORA), what AI agent coverage exists today (AIUC-1, Munich Re aiSure, HSB), why certification alone isn't enough, and what behavioral monitoring infrastructure makes AI agents insurable, including the four evidence requirements every enterprise must meet.",
        href: "/ai-agent-insurance",
        readTime: "16 min read",
        live: true,
    },
    {
        category: "Essay · Insurance · Part I of III",
        title: "Trust Is Not a Property of Technology. It Is a Property of Infrastructure.",
        summary: "Every transformative technology earns trust the same way: through the confidence infrastructure that grows around it. Hartford Steam Boiler, Lloyd's aviation pools, usage-based auto insurance, and what this means for autonomous AI agents.",
        href: "/blog/confidence-infrastructure-part-1",
        readTime: "8 min read",
        live: true,
    },
    {
        category: "Essay · Regulatory · Part II of III",
        title: "The Law Has Assigned Liability. Nobody Can Yet Prove What Happened.",
        summary: "Three EU frameworks, EU AI Act, PLD 2024, DORA, have assigned liability for AI agent failures. The DRCF 'Many Hands' problem, AIUC-1's temporal limits, and the four evidence requirements (complete, continuous, independent, tamper-evident) that liability adjudication actually requires.",
        href: "/blog/confidence-infrastructure-part-2",
        readTime: "7 min read",
        live: true,
    },
    {
        category: "Essay · Technical · Part III of III",
        title: "The Telematics for Autonomous Systems",
        summary: "Usage-based auto insurance replaced proxies with real behavioral data. AI agent insurance will follow. This essay examines the technical architecture of continuous behavioral monitoring: Ed25519 signing, hash chaining, WORM storage, behavioral baselines, and why independence from the monitored system is non-negotiable.",
        href: "/blog/confidence-infrastructure-part-3",
        readTime: "7 min read",
        live: true,
    },
    {
        category: "Governance · Complete Guide",
        title: "AI Agent Governance: The Complete Enterprise Guide",
        summary: "What AI agent governance is, why existing approaches (provider controls, application guardrails, framework observability) fall short, the four structural requirements (identity, scope, enforcement, ledger), and what governance infrastructure actually has to do.",
        href: "/ai-agent-governance",
        readTime: "14 min read",
        live: true,
    },
    {
        category: "Security · Complete Guide",
        title: "Shadow AI: What It Is, Why It's a Risk, and How to Stop It",
        summary: "78% of employees using AI tools at work are using tools IT did not provision. Shadow AI is already in your production systems, here is what it looks like, why it creates regulatory exposure under GDPR and the EU AI Act, and how to govern it without killing adoption.",
        href: "/shadow-ai",
        readTime: "12 min read",
        live: true,
    },
    {
        category: "Regulatory · Complete Guide",
        title: "EU AI Act Compliance for AI Agents: The Complete Guide",
        summary: "Everything enterprises need to know about EU AI Act compliance for AI agents, Annex III classification, Articles 12, 14, 26 obligations, the December 2, 2027 deadline, the three structural gaps most organizations have, and a six-step action plan for building the audit infrastructure.",
        href: "/eu-ai-act-compliance",
        readTime: "15 min read",
        live: true,
    },
    {
        category: "Regulatory · Reference",
        title: "Qualified Electronic Ledger: What the EU Has Required Since January 2026",
        summary: "A new EU trust service under Articles 45k and 45l of the eIDAS Regulation, with technical rules in force since 6 January 2026. What REQ-7.5-04 mandates about hash chaining, what the Article 45k(2) presumption does and does not cover, why the December 2027 deadline belongs to the EUDI Wallet and not to ledgers, and why Germany still has no authorised provider.",
        href: "/qualified-electronic-ledger",
        readTime: "10 min read",
        live: true,
    },
    {
        category: "Regulatory · Strategic",
        title: "The US and EU Are Converging on the Same Requirements for AI Agents in Critical Infrastructure",
        summary: "NIST, the EU AI Act, and NIS-2 were developed independently, in different jurisdictions, over different timelines. They are converging on the same answer: traceable identity, causal context capture, tamper-evident records, in a governance layer independent of the agents it governs.",
        href: "/blog/nist-critical-infrastructure-ai-convergence",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Regulatory",
        title: "When Four Regulators Speak in Unison, the Message Is Not Optional",
        summary: "The UK's Digital Regulation Cooperation Forum, CMA, FCA, ICO, and Ofcom, co-signed a foresight paper on agentic AI. The core message: 'my agent did it' is not a defense. Organizational accountability is unchanged regardless of agent autonomy. Here are the seven risks, the 'Many Hands' problem, and what to do before enforcement begins.",
        href: "/blog/drcf-agentic-ai-foresight",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Security",
        title: "Agent Hijacking: The Security Risk Most Enterprises Can't Even Detect",
        summary: "OWASP ranks Agent Goal Hijacking ASI01, the #1 risk facing autonomous AI agents. 48% of security professionals name agentic AI as the top attack vector for 2026. Classical security tools are blind to it. Here is how it works, why it evades detection, and what forensic infrastructure is actually required.",
        href: "/blog/agent-goal-hijacking",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Regulatory",
        title: "The EU AI Act Is Coming. Regardless of What Brussels Decides in May.",
        summary: "The Digital Omnibus trilogue collapsed on 28 April 2026, then reached preliminary agreement on May 7: Annex III enforcement moved to December 2, 2027. What the collapse looked like from the inside, and why the obligations were delayed, not softened.",
        href: "/blog/eu-ai-act-omnibus-collapse",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Reference",
        title: "AI Agent Security, AI Governance, and Agent Enforcement: Three Categories Enterprises Are Confusing",
        summary: "CISOs and compliance teams are evaluating products that all describe themselves as 'AI governance', but solve fundamentally different problems. This article defines the three distinct categories, maps them to regulatory requirements, and identifies where each falls short.",
        href: "/blog/ai-governance-three-categories",
        readTime: "6 min read",
        live: true,
    },
    {
        category: "Strategic",
        title: "Every Vendor Governs Their Stack. Nobody Governs the Chain.",
        summary: "Microsoft has a governance story. Google has a governance story. Every major platform vendor is building agent governance, for the agents that run inside their own stack. Nobody is building governance for what happens between stacks. That gap is not an oversight. It is where most of the risk lives.",
        href: "/blog/nobody-governs-the-chain",
        readTime: "6 min read",
        live: true,
    },
    {
        category: "Security",
        title: "Your Employees Are Already Using AI. You Just Don't Know How.",
        summary: "78% of AI users bring their own tools to work. Your employees are not waiting for your AI strategy. They already have one, and the data they're processing with it isn't yours to govern yet.",
        href: "/blog/employees-using-ai-shadow",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Technical · Strategic",
        title: "The End of the App Layer: Why MCP Changes Everything About AI Governance",
        summary: "MCP lets AI agents connect directly to enterprise systems, bypassing the application layer that was always the implicit governance control point. The app layer doesn't get rebuilt. It gets bypassed. Something needs to replace the control point it represented.",
        href: "/blog/mcp-changes-ai-governance",
        readTime: "6 min read",
        live: true,
    },
    {
        category: "Security",
        title: "What Happens When an AI Agent Gets Compromised, And Nobody Has the Logs",
        summary: "ForcedLeak demonstrated prompt injection against production enterprise agents in 2025. The most important question it raises isn't technical, it's operational. If this happened in your environment, would you know?",
        href: "/blog/compromised-agent-no-logs",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Security",
        title: "Shadow AI Is Already in Your Production Systems, You Just Can't See It",
        summary: "Shadow AI is the same problem as Shadow IT, at a different order of magnitude. Every LLM call that touches enterprise data without logging, attribution, or scope is a liability accumulating in silence.",
        href: "/blog/shadow-ai-production-systems",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Technical",
        title: "The Missing Layer in Every Agent Architecture",
        summary: "The distinction between agent core and agent harness cuts to the heart of what most enterprise deployments get wrong. Single-user architecture breaks at scale in four predictable ways. The harness isn't an add-on, for enterprise, it's the product.",
        href: "/blog/missing-layer-agent-architecture",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Thought Leadership",
        title: "HBR Just Described the Problem. Here's the Infrastructure That Solves It.",
        summary: "Harvard Business Review identified four frictions that derail enterprise AI agent deployments: identity, context, control, and accountability. The article stops short of specifying what the infrastructure layer looks like. That's what we build.",
        href: "/blog/hbr-ai-agents-infrastructure",
        readTime: "5 min read",
        live: true,
    },
    {
        category: "Regulatory",
        title: "DORA and AI Agents: Why Your LLM Provider's Log Doesn't Satisfy Article 30",
        summary: "DORA is already in force. Financial entities using AI agents for operational functions have a specific problem: vendor-provided logs don't constitute an independent audit trail. Here's why, and what does.",
        href: "/blog/dora-ai-agents",
        readTime: "4 min read",
        live: true,
    },
    {
        category: "Regulatory",
        title: "What the EU AI Act Actually Requires for Audit Trails, And What Most Enterprises Are Missing",
        summary: "The enforcement deadline is December 2, 2027. Most enterprises assume their LLM provider's logs will be sufficient. They won't be. Here's what the regulation actually demands, and where the gaps are.",
        href: "/blog/eu-ai-act-audit-trails",
        readTime: "5 min read",
        live: true,
    },
];

export const GUIDES: Article[] = [
    {
        category: "Technical · Security",
        title: "How to Detect Shadow AI",
        summary: "Step-by-step technical methods to identify unscoped AI systems in enterprise networks using DNS rules, SIEM queries, and behavioral patterns.",
        href: "/guides/detect-shadow-ai",
        readTime: "25 min read",
        tags: ["Detection", "SIEM", "Network Monitoring"]
    },
    {
        category: "Regulatory · Compliance",
        title: "How to Classify AI Systems Under EU AI Act",
        summary: "Framework for determining if your AI systems are High-Risk, General-Purpose, or Low-Risk. Includes all 37 Annex III categories and obligations.",
        href: "/guides/classify-ai-systems",
        readTime: "30 min read",
        tags: ["Annex III", "Risk Assessment", "Obligations"]
    },
    {
        category: "Implementation · Compliance",
        title: "Shadow AI Governance Checklist",
        summary: "8-phase checklist for implementing AI governance from discovery to audit readiness. Includes 70+ checkboxes, RACI matrix, and incident response planning.",
        href: "/guides/governance-checklist",
        readTime: "35 min read",
        tags: ["Framework", "Compliance", "Monitoring"]
    },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "AI Agent Governance",
    slug: "ai-agent-governance",
    teaser: "The infrastructure that controls what agents may do, enforces it at runtime, and produces verifiable evidence.",
  },
  {
    term: "Behavioral Firewall",
    slug: "behavioral-firewall",
    teaser: "Enforcement between agents and the systems they act on: what is not allowed does not execute.",
  },
  {
    term: "Observability vs Governance",
    slug: "agent-observability-vs-governance",
    teaser: "Telemetry describes behavior after the fact; governance constrains it before execution. The difference, side by side.",
  },
  {
    term: "AI Agent Audit Trail",
    slug: "ai-agent-audit-trail",
    teaser: "A tamper-evident record of every action across six dimensions: who, what, when, where, why, how.",
  },
  {
    term: "Agent Attestation",
    slug: "agent-attestation",
    teaser: "Signed, verifiable proof that an agent operated within its mandate, checkable by third parties without raw data.",
  },
  {
    term: "Trust Score for AI Agents",
    slug: "ai-agent-trust-score",
    teaser: "A behavioral rating of the deployed agent, normalized across providers. Conduct, not capability.",
  },
  {
    term: "Levels of Agent Autonomy",
    slug: "agent-autonomy-levels",
    teaser: "The ladder from read-only to self-directed, and why promotion should be earned with evidence.",
  },
  {
    term: "Human-in-the-Loop Approval",
    slug: "human-in-the-loop-ai-agents",
    teaser: "Explicit human sign-off before designated actions execute, and why it must be recorded to count.",
  },
  {
    term: "AI Governance Proxy (AI Gateway)",
    slug: "ai-governance-proxy",
    teaser: "One network control point for the agent traffic you route through it: identity, policy, evidence, zero code changes.",
  },
  {
    term: "Knowledge Egress",
    slug: "knowledge-egress",
    teaser: "The continuous outflow of proprietary information through AI usage, invisible to classic DLP.",
  },
];

// The pages that are the product rather than writing about it. Hand-kept and
// deliberately short: an agent asking what Kyde is should land on one of these,
// not on the eleventh blog post about the EU AI Act.
export const KEY_PAGES: Article[] = [
  {
    category: "Platform",
    title: "Kyde Zero Trust",
    summary: "The zero trust layer for AI. Identity, policy, data boundaries and limits checked at the moment of action, and a record anyone can verify afterwards, in your own environment.",
    href: "/",
  },
  {
    category: "Service",
    title: "Kyde AI Workers",
    summary: "The build service. Kyde captures a process area with the people who run it, builds the part that holds up into a worker, and runs it on the zero trust layer.",
    href: "/services",
  },
  {
    category: "Service",
    title: "The Kyde Audit",
    summary: "One complete business process mapped end to end: what should run with AI, what belongs in conventional software, what stays with people, what is not ready yet, and the blocker and owner on everything held back.",
    href: "/audit",
  },
  {
    category: "Platform",
    title: "Use Cases",
    summary: "One layer, two ways to use it. Worked examples per sector, with what the worker takes, what stays with a person, what gets recorded, and which regulations apply.",
    href: "/use-cases",
  },
  {
    category: "Reference",
    title: "Kyde Gateway Documentation",
    summary: "The gateway behind the layer: quickstart, user manual, deployment and reference for the OpenAI-compatible governance proxy.",
    href: "/docs",
  },
  {
    category: "Company",
    title: "Company",
    summary: "What Kyde builds and why. Early stage, engineered in Germany, working with design partners in finance, insurance, healthcare, the public sector, critical infrastructure and manufacturing.",
    href: "/company",
  },
  {
    category: "Reference",
    title: "FAQ",
    summary: "What security and compliance teams ask before deploying the gateway: latency, data privacy, audit evidence, and how it differs from a SIEM or an API gateway.",
    href: "/faq",
  },
];
