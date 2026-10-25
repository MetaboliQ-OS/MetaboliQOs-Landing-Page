import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PageIntro, Section } from "@/components/site/ui";
import { articles, learnCategories } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Learn | MetaboliQ OS",
  description:
    "Practical lessons on food, preparation, movement, sleep, stress and metabolic health — understand your body and make better daily decisions.",
  path: "/learn",
});

export default async function LearnPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).category;
  const active = typeof raw === "string" && learnCategories.some((c) => c.slug === raw) ? raw : "all";
  const list = active === "all" ? articles : articles.filter((a) => a.category === active);
  const filters = [{ slug: "all", label: "All" }, ...learnCategories];

  return (
    <>
      <PageIntro eyebrow="Learn" title="Understand Your Body. Make Better Daily Decisions.">
        <p>
          Practical lessons on food, preparation, movement, sleep, stress and metabolic health. Explore the research,
          the founder’s observations and the questions worth asking. Each article should make one useful idea easier to
          understand.
        </p>
      </PageIntro>

      <Section>
        {/* Filters scroll sideways on phones instead of wrapping into a tall block. */}
        <nav aria-label="Article categories" className="-mx-[4vw] mb-8 overflow-x-auto px-[4vw] pb-1 [scrollbar-width:none]">
          <ul className="flex w-max gap-2">
            {filters.map((f) => {
              const on = f.slug === active;
              return (
                <li key={f.slug}>
                  <Link
                    href={f.slug === "all" ? "/learn" : `/learn?category=${f.slug}`}
                    aria-current={on ? "page" : undefined}
                    scroll={false}
                    className={`inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      on
                        ? "border-transparent bg-[var(--gold-ink)] text-[var(--background)]"
                        : "border-[var(--line-strong)] text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {f.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {list.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--line-strong)] p-8 text-center">
            <p className="text-text-secondary">No articles in this category yet. Explore all articles.</p>
            <Link href="/learn" className="btn-ghost mt-5">
              View All Articles
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
