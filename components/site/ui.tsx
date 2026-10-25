import Link from "next/link";
import type { ReactNode } from "react";
import { startJourneyHref } from "@/lib/nav";

/**
 * Shared building blocks for the public pages. They reuse the site's existing
 * visual language (italic Cormorant headings in gold, gold-line, rounded
 * bordered cards, gold/ghost buttons) and read every colour from theme tokens.
 */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-ink)]">{children}</p>
  );
}

export function ExampleTag() {
  return <span className="badge badge-amber">Example</span>;
}

type Action = { label: string; href: string; external?: boolean };

export function ActionLink({ action, variant }: { action: Action; variant: "gold" | "ghost" | "text" }) {
  const cls =
    variant === "gold"
      ? "btn-gold justify-center"
      : variant === "ghost"
        ? "btn-ghost justify-center"
        : "inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold-ink)] underline-offset-4 hover:underline";
  const content = variant === "text" ? <>{action.label} <span aria-hidden>→</span></> : action.label;
  return action.external ? (
    <a href={action.href} className={cls}>
      {content}
    </a>
  ) : (
    <Link href={action.href} className={cls}>
      {content}
    </Link>
  );
}

/** Page-level headline: one clear headline, a concise explanation and next actions (§13). */
export function PageIntro({
  eyebrow,
  title,
  children,
  primary,
  secondary,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  primary?: Action;
  secondary?: Action;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.08) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className={`container-main relative grid gap-10 py-14 md:py-20 ${aside ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center" : ""}`}
      >
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-3 text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.06] text-text-primary">{title}</h1>
          <div className="gold-line" />
          {children ? <div className="space-y-4 text-[1.02rem] leading-relaxed text-text-secondary md:text-lg">{children}</div> : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              {primary ? <ActionLink action={primary} variant="gold" /> : null}
              {secondary ? <ActionLink action={secondary} variant="ghost" /> : null}
            </div>
          ) : null}
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}

/** A page section with the site's gold italic heading. `tone="alt"` alternates the background. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "base",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "base" | "alt";
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-pad scroll-mt-24 border-t border-[var(--line)] ${tone === "alt" ? "bg-[var(--surface-1)]" : ""}`}
    >
      <div className="container-main">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {title ? (
          <h2 className="gold-text mt-2 text-[clamp(1.9rem,4.4vw,3rem)] italic leading-tight">{title}</h2>
        ) : null}
        {title ? <div className="gold-line" /> : null}
        {intro ? <div className="mb-8 max-w-3xl space-y-4 leading-relaxed text-text-secondary">{intro}</div> : null}
        {children}
      </div>
    </section>
  );
}

/** Short summary with a Learn More action — keeps pages scannable (§13). */
export function SummaryCard({
  title,
  children,
  action,
  icon,
  footer,
}: {
  title: ReactNode;
  children: ReactNode;
  action?: Action;
  icon?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5 sm:p-6">
      {icon ? <div className="mb-4 text-[var(--gold-ink)]">{icon}</div> : null}
      <h3 className="text-[1.35rem] font-semibold leading-snug text-text-primary">{title}</h3>
      <div className="mt-2 flex-1 space-y-3 text-[0.95rem] leading-relaxed text-text-secondary">{children}</div>
      {footer}
      {action ? (
        <div className="mt-5">
          <ActionLink action={action} variant="text" />
        </div>
      ) : null}
    </article>
  );
}

/** Closing band that routes to Start My Journey. */
export function CtaBand({
  title,
  children,
  primary = { label: "Start My Journey", href: startJourneyHref },
  secondary,
}: {
  title: ReactNode;
  children?: ReactNode;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section className="section-pad border-t border-[var(--line)]">
      <div className="container-main">
        <div className="rounded-3xl border border-[var(--line-strong)] bg-gradient-to-br from-[var(--gold-wash)] to-transparent px-6 py-10 text-center sm:px-10 md:py-14">
          <h2 className="gold-text mx-auto max-w-3xl text-[clamp(1.8rem,4.4vw,2.8rem)] italic leading-tight">{title}</h2>
          {children ? <div className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-secondary">{children}</div> : null}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row">
            <ActionLink action={primary} variant="gold" />
            {secondary ? <ActionLink action={secondary} variant="ghost" /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Expandable detail for long methodology / evidence text (native, keyboard-accessible). */
export function Disclosure({ summary, children }: { summary: ReactNode; children: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] open:border-[var(--line-strong)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[0.98rem] font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
        {summary}
        <span
          aria-hidden
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--gold-ink)] transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="space-y-3 px-5 pb-5 text-[0.95rem] leading-relaxed text-text-secondary">{children}</div>
    </details>
  );
}

/** A numbered step row used by the 5-step journey. */
export function StepItem({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className="relative flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5 sm:gap-5 sm:p-6">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--gold-wash)] font-semibold text-[var(--gold-ink)]">
        {n}
      </span>
      <div className="min-w-0">
        <h3 className="text-[1.3rem] font-semibold leading-snug text-text-primary">{title}</h3>
        <div className="mt-1.5 space-y-3 text-[0.95rem] leading-relaxed text-text-secondary">{children}</div>
      </div>
    </li>
  );
}
