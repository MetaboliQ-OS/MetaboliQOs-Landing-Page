"use client";

import { journeyMarkersAfter, journeyMarkersBefore } from "@/lib/marketing-content";

export function MarkerColumn({
  period,
  subtitle,
  markers,
  tone,
}: {
  period: string;
  subtitle: string;
  markers: { label: string; value: string }[];
  tone: "before" | "after";
}) {
  const valueColor = tone === "before" ? "text-[#E05252]" : "text-[#4CAF7D]";

  return (
    <div className="glass flex h-full flex-col rounded-2xl border border-[rgba(201,168,76,0.15)] p-4 md:p-5">
      <div className="mb-3 border-b border-[rgba(201,168,76,0.1)] pb-3">
        <p className="text-lg text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
          {period}
        </p>
        <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-text-muted">
          {subtitle}
        </p>
      </div>
      <ul className="flex-1 space-y-2">
        {markers.map((m) => (
          <li
            key={m.label}
            className="flex items-baseline justify-between gap-2 border-b border-[rgba(255,255,255,0.04)] pb-2 text-[0.72rem] last:border-0"
          >
            <span className="text-text-muted">{m.label}</span>
            <span
              className={`shrink-0 text-right font-semibold ${valueColor}`}
              style={{ fontFamily: "var(--font-head)" }}
            >
              {m.value}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.58rem] italic text-text-muted">
        Documented case study · not medical advice
      </p>
    </div>
  );
}

export function JourneyMarkerTimeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <MarkerColumn
        period="July 2025"
        subtitle="Before · baseline markers"
        markers={journeyMarkersBefore}
        tone="before"
      />
      <MarkerColumn
        period="Dec 2025"
        subtitle="After · 5-month turnaround"
        markers={journeyMarkersAfter}
        tone="after"
      />
    </div>
  );
}
