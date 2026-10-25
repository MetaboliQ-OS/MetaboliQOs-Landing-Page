import Link from "next/link";
import { type Article, categoryLabel, formatArticleDate } from "@/lib/articles";

/**
 * Learn card (§10 article format): visual, article number, hook heading,
 * one-line introduction, author, publication date and topic.
 */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)]">
      <Link href={`/learn/${article.slug}`} className="flex h-full flex-col">
        {/* Typographic visual until approved pictures are supplied. */}
        <div
          aria-hidden
          className="relative flex h-28 items-end justify-between overflow-hidden border-b border-[var(--line)] bg-gradient-to-br from-[var(--gold-wash)] to-transparent px-5 pb-3"
        >
          <span className="gold-text text-[3.2rem] font-semibold italic leading-none" style={{ fontFamily: "var(--font-head)" }}>
            {String(article.number).padStart(2, "0")}
          </span>
          <span className="badge badge-gold normal-case tracking-normal">{categoryLabel(article.category)}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-text-muted">
            Article {article.number}
          </p>
          <h3 className="mt-1.5 text-[1.3rem] font-semibold leading-snug text-text-primary">{article.title}</h3>
          <p className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-text-secondary">{article.intro}</p>
          <p className="mt-4 text-xs text-text-muted">
            {article.author} · <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          </p>
        </div>
      </Link>
    </article>
  );
}
