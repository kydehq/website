// Footer of the new pages: products and developer links first, then the
// published library for SEO (same list as the live footer's "Learn"), then the
// company. When the pages go live, this belongs in Footer.astro itself.
import { INDUSTRIES } from "./industries";

const SKILL_URL = "https://score.kyde.com/skill.md";
const SKILL_REPO = "https://github.com/kydehq/kyde-score-skill";
const GITHUB = "https://github.com/kydehq/behavioral-drift-detection";

export const labFooterLinks = {
  Products: [
    { label: "Kyde Score", href: "/products#score" },
    { label: "Kyde Control", href: "/products#control" },
    { label: "Pricing", href: "/pricing" },
    { label: "Research", href: "/research" },
  ],
  Developers: [
    { label: "Docs", href: "/docs" },
    { label: "Agent skill", href: SKILL_URL },
    { label: "Claude Code plugin", href: SKILL_REPO },
    { label: "Open-source detectors", href: GITHUB },
    { label: "llms.txt", href: "https://score.kyde.com/llms.txt" },
  ],
  Industries: [
    { label: "Overview", href: "/industries" },
    ...INDUSTRIES.filter((i) => i.page).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  ],
  Learn: [
    { label: "Behavioral Drift", href: "/behavioral-drift" },
    { label: "OpenTelemetry GenAI Conventions", href: "/blog/genai-semantic-conventions-drift" },
    { label: "EU AI Act Compliance", href: "/eu-ai-act-compliance" },
    { label: "AI Agent Governance", href: "/ai-agent-governance" },
    { label: "Zero Trust for Agents", href: "/zero-trust-for-ai-agents" },
    { label: "Shadow Agents", href: "/shadow-ai" },
    { label: "Qualified Electronic Ledger", href: "/qualified-electronic-ledger" },
    { label: "Glossary", href: "/glossary" },
    { label: "FAQ", href: "/faq" },
    { label: "All Resources", href: "/resources" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Privacy & Imprint", href: "/legal" },
  ],
};
