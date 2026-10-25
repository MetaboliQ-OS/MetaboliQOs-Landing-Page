import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/site/ArticleCard";
import { CtaBand, Eyebrow, Section } from "@/components/site/ui";
import { articles, categoryLabel, formatArticleDate } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return createPageMetadata({ title: `${a.title} | Learn | MetaboliQ OS`, description: a.intro, path: `/learn/${a.slug}` });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3);

  return (
    <>
      <article className="border-b border-[var(--line)]">
        <div className="container-main max-w-3xl py-12 md:py-16">
          <Link href="/learn" className="text-sm font-semibold text-[var(--gold-ink)] underline-offset-4 hover:underline">
            ← All articles
          </Link>
          <div className="mt-6">
            <Eyebrow>
              Article {article.number} ·{" "}
              <Link href={`/learn?category=${article.category}`} className="underline-offset-4 hover:underline">
                {categoryLabel(article.category)}
              </Link>
            </Eyebrow>
          </div>
          <h1 className="mt-3 text-[clamp(2rem,5.5vw,3.2rem)] font-semibold leading-[1.1] text-text-primary">{article.title}</h1>
          <p className="mt-4 text-sm text-text-muted">
            {article.author} · <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          </p>
          <div className="gold-line" />
          <div className="space-y-5 text-[1.05rem] leading-[1.75] text-text-secondary">
            <p className="text-lg font-semibold text-text-primary">{article.intro}</p>
            {article.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <p className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--gold-wash)] p-4 text-sm leading-relaxed text-text-muted">
            Educational information, not medical advice. Founder observations describe one person’s experience; they are
            not clinical trials. Discuss medication and treatment changes with a qualified clinician.
          </p>
        </div>
      </article>

      <Section eyebrow="Keep reading" title="Related articles">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      <CtaBand title="Understand your body. Make better daily decisions." />
    </>
  );
}
