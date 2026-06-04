import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge?: string;
  badgeVariant?: "gold" | "green" | "amber";
  title: ReactNode;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  badge,
  badgeVariant = "gold",
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  const badgeClass =
    badgeVariant === "green"
      ? "badge-green"
      : badgeVariant === "amber"
        ? "badge-amber"
        : "badge-gold";

  return (
    <div className={className}>
      {badge ? <span className={`badge ${badgeClass} mb-3`}>{badge}</span> : null}
      <h2 className="gold-text mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
        {title}
      </h2>
      <div className="gold-line" />
      {subtitle ? (
        <p className="mb-10 max-w-3xl text-text-secondary">{subtitle}</p>
      ) : (
        <div className="mb-10" />
      )}
    </div>
  );
}
