"use client";

import { motion } from "framer-motion";
import { phases } from "@/lib/marketing-content";

export function PhasesSection() {
  return (
    <section
      id="phases"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "linear-gradient(180deg, #0d0d0d, #080808)" }}
    >
      <div className="container-main">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7a7060]">
          The Framework
        </span>
        <h2 className="gold-text mt-2 mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
          MRRRU — The Six-Phase
          <br />
          Metabolic Operating System
        </h2>
        <div className="gold-line" />
        <p className="mb-10 max-w-2xl text-[#c8bfa8]">
          Not a diet. Not a protocol. A living decision framework built from thousands of real
          data loops — food, glucose, sleep, stress, blood markers and movement — tested on me
          first.
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase, i) => (
            <motion.article
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
              <div className="mb-3 flex items-start gap-3">
                <span className="text-2xl">{phase.icon}</span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-wider text-[#7a7060]">
                    Phase {phase.id}
                    {phase.founderActive ? " ✦ My Active Phase" : phase.active ? " ✦" : ""}
                  </p>
                  <h3 className="text-lg font-semibold" style={{ color: phase.accent }}>
                    {phase.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#c8bfa8] leading-relaxed">{phase.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {phase.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.04)] px-2.5 py-1 text-xs text-[#c8bfa8]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
