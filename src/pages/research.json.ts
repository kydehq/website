// The studies of /research as JSON, for agents and anyone who wants
// the numbers without the page. Same source: src/data/research.ts.
import type { APIRoute } from "astro";
import { studies, RESULTS, REPO, MEASURED, METHOD } from "../data/research";

export const GET: APIRoute = () => {
  const body = {
    publisher: "Kyde Research",
    page: "https://kyde.com/research/",
    measured: MEASURED,
    method_version: METHOD,
    code: REPO,
    note: "Agent behavior on public corpora. Draft studies are not confirmed for publication.",
    studies: studies.map((m) => ({
      id: m.id,
      status: m.status,
      name: m.name,
      question: m.question,
      finding: m.finding,
      setup: m.intro,
      columns: m.columns.map((c) => c.label),
      rows: m.rows,
      limitations: m.note ?? null,
      runs: m.runs ?? null,
      corpus: m.corpus,
      source: `${RESULTS}/${m.source}`,
    })),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { "Content-Type": "application/json" } });
};
