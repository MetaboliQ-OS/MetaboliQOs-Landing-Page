import { statsStripMarkers } from "@/lib/marketing-content";

export function StatsStrip() {
  return (
    <section
      aria-label="Founder biomarker improvements"
      className="border-y border-[rgba(201,168,76,0.12)] py-6"
      style={{ background: "#0d0d0d" }}
    >
      <div className="container-main">
        <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-none">
          {statsStripMarkers.map((m) => (
            <div
              key={m.label}
              className="min-w-[140px] shrink-0 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#141414] px-4 py-3 text-center"
            >
              <div className="text-lg font-bold text-[#c9a84c]">{m.before}</div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-wider text-text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
