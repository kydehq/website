import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { ARTICLES } from "../data/content-index";

// The feed is the dated writing, which today means the blog. The guides and the
// research notes are deliberately undated — they hang off regulation and
// research rather than off news — and an item without a pubDate sorts
// arbitrarily in every reader, so they stay out until one of them is given a
// date on purpose.
//
// Everything comes from ARTICLES rather than from a second list, because a list
// with two readers disagrees with itself eventually. Same reason the index
// exists at all.
export async function GET(context: APIContext) {
    const dated = ARTICLES.filter(
        (a): a is typeof a & { date: string } => typeof a.date === "string",
    ).sort((a, b) => b.date.localeCompare(a.date));

    return rss({
        title: "Kyde",
        description:
            "Writing on behavioral drift in AI agents, agent governance and the evidence regulated companies are going to be asked for.",
        site: context.site!,
        trailingSlash: false,
        items: dated.map((a) => ({
            title: a.title,
            description: a.summary,
            link: a.href,
            // Parsed as UTC midnight, which is as precise as the record is: the
            // dates are day-resolution and the posts never claimed a time.
            pubDate: new Date(`${a.date}T00:00:00Z`),
            // "Regulatory · Strategic" is one display string and two categories.
            categories: a.category
                .split("·")
                .map((c) => c.trim())
                .filter(Boolean),
        })),
        customData: "<language>en</language>",
    });
}
