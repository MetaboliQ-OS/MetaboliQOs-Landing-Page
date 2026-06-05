"use client";

import { m } from "framer-motion";
import { phases } from "@/lib/marketing-content";

export function PhasesSection() {
  return (
    <section
      id="phases"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "linear-gradient(180deg, #0d0d0d, #080808)" }}
    >
      <div className="container-main">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
          Your Journey
        </span>
        <h2 className="gold-text mt-2 mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
          Six Phases To Rebuild
          <br />
          Your Metabolic Health
        </h2>
        <div className="gold-line" />
        <p className="mb-10 max-w-2xl text-text-secondary">
          Not a diet plan. A step-by-step path from where you are today to better daily decisions.
          Each phase builds on the last — food, glucose, sleep, stress, blood markers and movement —
          tested on me first, built for you.
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase, i) => (
            <m.article
              key={phase.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`card-hover rounded-2xl border bg-[#141414] p-5 ${
                phase.founderActive || phase.active
                  ? "border-[rgba(201,168,76,0.45)] shadow-[0_4px_30px_rgba(201,168,76,0.1)]"
                  : "border-[rgba(201,168,76,0.15)]"
              }`}
            >
              <div className="mb-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-text-secondary">
                  Phase {phase.id}
                  {phase.founderActive ? (
                    <span className="text-[#c9a84c]"> · My Active Phase</span>
                  ) : null}
                </p>
                <h3 className="mt-1 text-lg font-semibold" style={{ color: phase.accent }}>
                  {phase.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{phase.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {phase.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.04)] px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
