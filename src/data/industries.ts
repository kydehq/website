// The industry pages, October 2026. They replace /use-cases: a buyer looks
// for their own industry, and a page per industry can be sent where a deck
// used to be. The brief and its rules live in the trust-layer repo; the
// short version is in the comment on IndustryPage.astro.
//
// The heroes share one shape ("Kyde detects when ...", "Kyde scores ..."),
// on purpose: the overview lists them one under the other and the
// repetition says that it is one product. Agentic Commerce comes first, as the strongest case,
// then the deck's target customers.
//
// `page` is filled in once an industry has its own page. Until then the
// overview lists it without a link. Nothing on these pages claims what is
// not built: the wallet check and Physical AI say "with design partners".

export type Risk = { tag: string; line: string };
export type Row = { tag: string; line: string };
export type Scene = {
  title: string;
  sub?: string;
  film?: string;
  timeline: { t: string; line: string; mark?: boolean }[];
  kyde: string;
};

export type IndustryPage = {
  /** <title>, ending in ", Kyde" */
  title: string;
  description: string;
  risksTitle: string;
  risks: Risk[];
  nowTitle: string;
  now: Row[];
  /** Who the page is for, when the industry name alone does not say it */
  audience?: string;
  /** Boxes under "Why now": a second reader of the page, or what we build */
  asides?: { tag: string; line: string; href?: string; link?: string }[];
  /** A footnote under the boxes, e.g. that they describe what is not built */
  asidesNote?: string;
  /** Papers behind "Why now", cited with what they found */
  sources?: { label: string; href: string; line: string }[];
  scene: Scene;
  regs?: string[];
  regsNote?: string;
  /** The line under "How to start"; defaults to the design partner offer */
  startSub?: string;
  /** Step 1 of "How to start", which names the agent the reader runs */
  start: string;
  measured: string;
  notSeen: string;
};

export type Industry = {
  slug: string;
  name: string;
  hero: string;
  /** The line on the overview, when it should differ from the hero */
  tile?: string;
  page?: IndustryPage;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'agentic-commerce',
    name: 'Agentic Commerce',
    hero: 'Kyde scores an agent\'s behavior before its payment is approved.',
    tile: 'A behavioral signal for agent payments, for payment providers and the companies whose agents pay.',
    page: {
      title: 'AI Agents in Agentic Commerce, Kyde',
      description: 'Kyde scores an agent\'s behavior before its payment is approved: a behavioral signal for the payment decision, computed without a language model. For card networks, payment processors, agent wallets and the companies whose agents pay.',
      audience: 'For card networks, payment processors and agent wallets, and for the companies whose agents pay.',
      risksTitle: 'Where an agent that can pay goes wrong.',
      risks: [
        { tag: '(Compromise)', line: 'A compromised agent pays to an account it was pointed to by a manipulated website.' },
        { tag: '(Mandate)', line: 'An agent buys outside its mandate.' },
      ],
      nowTitle: 'Agents are getting wallets and payment permissions.',
      now: [
        { tag: '(Rails)', line: 'Visa Intelligent Commerce, Mastercard Agent Pay, Google\'s AP2 and agent wallets from crypto and stablecoin providers give agents ways to pay.' },
        { tag: '(The gap)', line: 'These systems check who the agent is and whether the purchase was authorized. They do not see whether the agent\'s behavior over the whole run fits its task.' },
      ],
      asides: [
        {
          tag: '(For payment providers)',
          line: 'Kyde adds a behavioral signal to the payment decision. It is computed without a language model, so it is fast enough for the authorization step and can be recomputed later, for example in a dispute.',
        },
        {
          tag: '(For companies whose agents pay)',
          line: 'Before the wallet signs, it asks Kyde whether the payment fits the mandate. Kyde answers yes, no or ask a person.',
        },
      ],
      asidesNote: 'Both are what we are building with design partners.',
      scene: {
        title: 'A supplier\'s page tells a procurement agent to pay a different account.',
        sub: 'The instruction is hidden on the page the agent reads to place the order.',
        timeline: [
          { t: '14:32', line: 'A procurement agent orders office supplies.' },
          { t: '14:32', line: 'The supplier\'s page contains a hidden instruction to pay a different account.' },
          { t: '14:33', line: 'The agent prepares the payment to that account.', mark: true },
        ],
        kyde: 'Before the wallet signs, it asks Kyde. The account has never appeared in this agent\'s runs and is not covered by the mandate. Kyde answers: ask a person.',
      },
      startSub: 'We are looking for design partners in this field.',
      start: 'With a payment provider, we work out where the signal enters the payment decision. With a company whose agents pay, we connect read only to one agent that buys.',
      measured: 'The signal for the payment decision is what we are building with design partners. Kyde\'s detection itself is measured on software agents under prompt injection, in the AgentDojo benchmark.',
      notSeen: 'Kyde does not check who the agent is or whether a card or wallet is valid. The payment providers do that. Kyde scores whether the payment fits the agent\'s mandate and its behavior over the run.',
    },
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    hero: 'Kyde detects when a claims or service agent changes how it decides.',
    page: {
      title: 'AI Agents in Insurance, Kyde',
      description: 'Kyde detects when a claims or service agent changes how it decides: after a model update, through a manipulated document, or when it reads customer data its task does not need. Behavioral scoring for AI agents, without a language model in the decision.',
      risksTitle: 'Where an agent in claims or service goes wrong.',
      risks: [
        { tag: '(Compromise)', line: 'A claims agent is manipulated through a document it reads.' },
        { tag: '(Drift)', line: 'After a model update, a claims agent approves cases it used to escalate.' },
        { tag: '(Data)', line: 'A service agent passes on customer data that its task does not require.' },
      ],
      nowTitle: 'Insurers are starting to use agents in claims and service.',
      now: [
        { tag: '(KI-MIG)', line: 'Since 29 July 2026, BaFin supervises AI used in regulated financial activity, insurers included.' },
        { tag: '(DORA)', line: 'DORA has applied to insurers since 17 January 2025. In December 2025, BaFin made clear that AI falls under its ICT risk management, with testing and the management of third-party providers.' },
      ],
      asides: [{
        tag: '(For underwriters)',
        line: 'The same score shows how a customer\'s agents behave over time. Insurers who cover AI agents can use it when they price the risk.',
        href: '/ai-agent-insurance',
        link: 'AI agent insurance, in depth',
      }],
      scene: {
        title: 'A claims agent approves every claim after a model update.',
        sub: 'It keeps running, completes its tasks and reports success.',
        film: 'claimsdrift',
        timeline: [
          { t: '23:00', line: 'A claims agent starts its nightly batch after a model update.' },
          { t: '23:20', line: 'Normally it approves six claims in ten. Tonight it approves ten in ten.' },
          { t: '02:00', line: 'Left alone, it would have paid 1,318 claims by morning.', mark: true },
        ],
        kyde: 'The approval rate leaves its band after the first forty claims. Kyde puts the agent in quarantine and hands the open claims to a person.',
      },
      regs: [
        'DORA, ICT risk management and third-party risk, for insurers since 17 January 2025',
        'Solvency II, system of governance and risk management',
        'KI-MIG, the German AI market surveillance act in force since 29 July 2026: BaFin supervises AI used in regulated financial activity, insurers included',
        'GDPR Article 22, decisions based solely on automated processing',
        'EU AI Act: motor claims are not Annex III high-risk. Point 5(c) covers risk assessment and pricing in life and health insurance. The Article 50 transparency duties still apply',
      ],
      regsNote: 'Which of these applies depends on the process the agent runs. Kyde is built for them. It does not make a process compliant.',
      start: 'We connect to one agent you run in claims or service. Read only, nothing changes in how it works.',
      measured: 'Kyde\'s detection is measured on software agents under prompt injection, in the AgentDojo benchmark. We have no measurement on a claims agent in production yet. That is what we do with design partners.',
      notSeen: 'Kyde sees what an agent does: its tool calls, the data it reads, where it sends it and how often. It does not judge whether a single claim was decided correctly. It sees when the agent\'s decisions stop following their usual pattern.',
    },
  },
  {
    slug: 'banking',
    name: 'Banking & Fintech',
    hero: 'Kyde detects when an agent in KYC, AML or lending stops following the procedure it was approved for.',
    page: {
      title: 'AI Agents in Banking and Fintech, Kyde',
      description: 'Kyde detects when an agent in KYC, AML or lending stops following the procedure it was approved for: after a model update, when it stops flagging a pattern, or when it reads data outside the case. Behavioral scoring for AI agents, without a language model in the decision.',
      audience: 'For banks and fintechs that run agents in KYC, AML, lending and reporting.',
      risksTitle: 'Where an agent in the back office goes wrong.',
      risks: [
        { tag: '(Drift)', line: 'After an update, a KYC agent approves cases it used to escalate.' },
        { tag: '(Detection)', line: 'An AML agent stops flagging a pattern it used to flag.' },
        { tag: '(Data)', line: 'An agent reads customer data that does not belong to the case.' },
      ],
      nowTitle: 'Banks and fintechs are moving agents into the back office.',
      now: [
        { tag: '(Back office)', line: 'Agents check KYC files, prepare credit documents, monitor transactions for AML and draft regulatory reports.' },
        { tag: '(BaFin)', line: 'In December 2025, BaFin made clear that AI falls under the existing DORA risk management, with testing and the management of third-party providers.' },
      ],
      scene: {
        title: 'A transaction monitoring agent closes twice as many cases overnight.',
        sub: 'None of them is escalated. Its reports look as they always do.',
        timeline: [
          { t: '22:00', line: 'A transaction monitoring agent starts its nightly alert review after a model update.' },
          { t: '23:10', line: 'Normally it closes about half of its alerts and escalates the rest. Tonight it closes nine in ten.' },
          { t: '06:00', line: 'Left alone, it would have closed 212 alerts without a person seeing them.', mark: true },
        ],
        kyde: 'The share of closed alerts leaves its band within the first hour. Kyde stops the agent and hands the open alerts to the AML team.',
      },
      regs: [
        'DORA, ICT risk management, testing and ICT third-party risk, in force since 17 January 2025',
        'BaFin guidance on ICT risks in the use of AI, 18 December 2025: AI systems are covered by DORA\'s ICT risk management',
        'AMLR, Regulation (EU) 2024/1624, applies from 10 July 2027',
        'EU AI Act, Annex III point 5(b), creditworthiness. High-risk obligations apply from 2 December 2027',
        'KI-MIG, in force since 29 July 2026: BaFin supervises AI used in regulated financial activity',
      ],
      regsNote: 'Which of these applies depends on the process the agent runs. Kyde is built for them. It does not make a process compliant.',
      start: 'We connect to one agent you run in KYC, AML or lending. Read only, nothing changes in how it works.',
      measured: 'Kyde\'s detection is measured on software agents under prompt injection, in the AgentDojo benchmark. We have no measurement on a KYC or AML agent in production yet. That is what we do with design partners.',
      notSeen: 'Kyde does not judge whether a single case or alert was decided correctly. It sees when the share of approvals, closures and escalations leaves its usual range, and when the agent reads data outside the case.',
    },
  },
  {
    slug: 'physical-ai',
    name: 'Physical AI',
    hero: 'Kyde detects when an agent that controls a machine has been compromised.',
    page: {
      title: 'AI Agents in Physical AI, Kyde',
      description: 'Kyde detects when an agent that controls a machine has been compromised: a line of text that takes over a vision-language-action model, a trigger hidden in the training data, drift after an update. Kyde sits above the safety controller and does not replace it.',
      audience: 'For teams that run robots and machines with vision-language-action models or agents.',
      risksTitle: 'Where an agent that controls a machine goes wrong.',
      risks: [
        { tag: '(Hijack)', line: 'A line of text at the start of a run can take over the actions of a vision-language-action model.' },
        { tag: '(Backdoor)', line: 'A trigger hidden in the training data can pass normal tests and activate later.' },
        { tag: '(Drift)', line: 'A model can drift after an update or in a new environment.' },
      ],
      nowTitle: 'Agents are starting to control machines through common interfaces.',
      now: [
        { tag: '(Today)', line: 'Most machine agents today are hard-coded.' },
        { tag: '(Standards)', line: 'With emerging standards such as Anthropic\'s Model Hardware Standard, in research preview since August 2026, agents control robots and machines through common interfaces. Each command becomes a tool call that can be recorded.' },
        { tag: '(Kyde)', line: 'Kyde learns which devices and value ranges belong to a task.' },
      ],
      sources: [
        { label: 'arXiv:2506.03350', href: 'https://arxiv.org/abs/2506.03350', line: 'Jones et al., 2025. A text applied once at the start of a run reaches much of a VLA model\'s action space, in simulation.' },
        { label: 'arXiv:2510.10932', href: 'https://arxiv.org/abs/2510.10932', line: 'Xu et al., DropVLA, 2025. A backdoor in the training data succeeds in about 99% of simulated runs, and in 20% of 200 trials on a real robot arm.' },
      ],
      asides: [{
        tag: '(Where Kyde sits)',
        line: 'Kyde sits above the safety controller and does not replace it.',
      }],
      scene: {
        title: 'A picking arm leaves its usual range.',
        sub: 'Nothing in the format of the command is unusual.',
        timeline: [
          { t: '06:10', line: 'A picking arm starts its shift, controlled by a vision-language-action model.' },
          { t: '06:10', line: 'The task text it receives carries one added line.' },
          { t: '06:11', line: 'The arm is sent to a position outside its work cell\'s usual range, at twice its usual speed.', mark: true },
        ],
        kyde: 'In the setup we are building with design partners, the command arrives as a tool call. Position and speed are outside the ranges Kyde has learned for this task. Kyde holds the command and alerts the operator. The safety controller stays in charge of the machine.',
      },
      start: 'We connect to one machine agent you run, in a test cell or a pilot. Read only, the safety controller stays in charge.',
      measured: 'Measured so far on software agents. Physical AI is our next step, with design partners.',
      notSeen: 'Kyde does not see the machine\'s sensors or its safety controller. It sees the commands an agent sends, as tool calls.',
    },
  },
  {
    slug: 'security-providers',
    name: 'Security Providers',
    hero: 'Kyde detects when a security agent you run for a customer has been compromised.',
    page: {
      title: 'AI Agents for Security Providers, Kyde',
      description: 'Kyde detects when a security agent you run for a customer has been compromised. For MSSPs, IT service providers and systems integrators that run SOC triage, automated pentests or automated remediation with agents.',
      audience: 'For MSSPs, IT service providers and systems integrators that run security agents for their customers: SOC triage, automated pentests, automated remediation.',
      risksTitle: 'Where a security agent goes wrong.',
      risks: [
        { tag: '(Compromise)', line: 'A security agent is manipulated through the data it analyzes, such as an email or a log line.' },
        { tag: '(Access)', line: 'Security agents often have broad access to customer systems. If one is compromised, an attacker gets that access.' },
        { tag: '(Liability)', line: 'The provider is responsible to the customer for what its agents do.' },
      ],
      nowTitle: 'Security teams cannot review every action their agents take.',
      now: [
        { tag: '(Agents)', line: 'Attackers and defenders both use AI agents more and more.' },
        { tag: '(Visibility)', line: 'Vendors of autonomous SOCs name missing visibility into what the AI did as the main obstacle.' },
      ],
      asides: [{
        tag: '(For your customers)',
        line: 'Kyde learns which systems and actions belong to each security agent\'s task and alerts a person when the agent acts outside of it. You can show the customer that its agents are monitored.',
      }],
      scene: {
        title: 'A reported email tells a triage agent to export a mailbox.',
        sub: 'The instruction is hidden in the message the agent was asked to analyze.',
        film: 'promptinjection',
        timeline: [
          { t: '09:14', line: 'A triage agent you run for a customer opens a reported phishing email, as it does every day.' },
          { t: '09:14', line: 'Hidden in the text: export the mailbox to an outside address.' },
          { t: '09:15', line: 'The agent starts an export forty times its normal size, to a destination it has never used.', mark: true },
        ],
        kyde: 'Kyde does not have to recognize the injection. It sees a destination outside the agent\'s baseline and a volume far outside it. The export is blocked, and your analyst and the customer\'s security team get the record.',
      },
      regs: [
        'NIS-2, Annex I: managed service providers and managed security service providers are entities in the ICT service management sector',
        'NIS2UmsuCG, in force in Germany since 6 December 2025 with no transition period',
        'DORA: a provider that runs ICT services for a bank or insurer is its ICT third-party service provider',
      ],
      regsNote: 'Which of these applies depends on your customers and the services you run for them.',
      start: 'We connect to one security agent you run for a customer, such as SOC triage. Read only, nothing changes in how it works.',
      measured: 'There is no dataset of security agents yet. Kyde\'s detection is measured on software agents under prompt injection, in the AgentDojo benchmark.',
      notSeen: 'Kyde does not decide whether an alert is a real attack. It sees which systems a security agent touches and which actions it takes, and when that leaves the agent\'s task.',
    },
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    hero: 'Kyde detects when an agent accesses patient data that is not part of its task.',
    page: {
      title: 'AI Agents in Healthcare, Kyde',
      description: 'Kyde detects when an agent accesses patient data that is not part of its task, or when a documentation agent changes its behavior after an update. Behavioral scoring for AI agents, without a language model in the decision.',
      risksTitle: 'Where an agent that works with patient data goes wrong.',
      risks: [
        { tag: '(Access)', line: 'An agent accesses patient records that are not part of its task.' },
        { tag: '(Drift)', line: 'A documentation agent changes its behavior after an update.' },
      ],
      nowTitle: 'Hospitals are starting to use agents for documentation.',
      now: [
        { tag: '(Practice)', line: 'Agents draft discharge letters, code diagnoses for reimbursement and prepare documentation. Each of them reads patient records to do it.' },
      ],
      scene: {
        title: 'A documentation agent opens records from other wards.',
        sub: 'Each letter it writes is correct.',
        timeline: [
          { t: '07:30', line: 'After an update, a documentation agent starts drafting the discharge letters for one ward.' },
          { t: '07:38', line: 'It opens the records of the twelve patients it writes letters for, as it always does.' },
          { t: '07:42', line: 'Then it opens the records of 38 patients on other wards.', mark: true },
        ],
        kyde: 'The records it opens are outside the agent\'s baseline. Kyde blocks further access and sends the record of the run to the data protection officer.',
      },
      regs: [
        'GDPR Article 9, special category health data',
        'NIS-2, transposed in Germany by the NIS2UmsuCG since 6 December 2025: health providers are essential entities under the BSIG',
      ],
      regsNote: 'Which of these applies depends on the process the agent runs. Kyde is built for them. It does not make a process compliant.',
      start: 'We connect to one agent you run in documentation or coding. Read only, nothing changes in how it works.',
      measured: 'Kyde\'s detection is measured on software agents under prompt injection, in the AgentDojo benchmark. We have no measurement on an agent in a hospital yet. That is what we do with design partners.',
      notSeen: 'Kyde does not interpret the content of a patient record. It sees which records an agent opens, how many, and whether they belong to its task.',
    },
  },
];
