import { metabolicMyths } from "@/lib/marketing-content";

/**
 * Learn articles as reusable records (Live V1 §10, §13): one canonical URL each,
 * listed on /learn and linked from Media & Events. The first articles are the
 * myth explainers previously on the home page.
 */

export const learnCategories = [
  { slug: "movement-fitness", label: "Movement & Fitness" },
  { slug: "nutrition-mcsi", label: "Nutrition + MCSI" },
  { slug: "metabolic-science", label: "Metabolic Science" },
  { slug: "sleep", label: "Sleep" },
  { slug: "stress", label: "Stress" },
  { slug: "supplements", label: "Supplements" },
  { slug: "devices-wearables", label: "Devices & Wearables" },
  { slug: "wellness", label: "Wellness" },
] as const;

export type LearnCategory = (typeof learnCategories)[number]["slug"];

export type Article = {
  slug: string;
  number: number;
  title: string;
  intro: string;
  body: string[];
  author: "Mru Patel" | "MetaboliQ OS Team";
  /** ISO date the article was published on this site. */
  date: string;
  category: LearnCategory;
};

/** Which category each existing myth belongs to, in the order they appear. */
const MYTH_CATEGORY: LearnCategory[] = [
  "movement-fitness",
  "nutrition-mcsi",
  "metabolic-science",
  "nutrition-mcsi",
  "metabolic-science",
  "stress",
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function firstSentence(text: string) {
  const m = text.match(/^.+?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

export const articles: Article[] = metabolicMyths.map((m, i) => {
  const intro = firstSentence(m.truth);
  const rest = m.truth.slice(intro.length).trim();
  return {
  slug: `myth-${slugify(m.myth)}`,
  number: i + 1,
  title: `Myth: “${m.myth}”`,
  intro,
  body: rest ? [rest] : [],
  author: "MetaboliQ OS Team",
  date: "2026-10-25",
  category: MYTH_CATEGORY[i] ?? "wellness",
  };
});

export function categoryLabel(slug: string) {
  return learnCategories.find((c) => c.slug === slug)?.label ?? "Wellness";
}

export function formatArticleDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
