"use client";

import { m } from "framer-motion";
import { ninePillars } from "@/lib/marketing-content";

export function NinePillarsSection() {
  return (
    <section
      id="pillars"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="container-main">
        <span className="badge badge-gold mb-3">What Matters</span>
        <h2 className="gold-text mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
          Nine Things That Shape Your Metabolic Health
        </h2>
        <div className="gold-line" />
        <p className="mb-10 max-w-3xl text-text-secondary">
          Most people focus on one thing — food, or exercise, or sleep. MetaboliQ OS tracks all nine
          because your body does not work in isolation. Stop guessing. See your signals. Get one clear
          next action from REVA.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ninePillars.map((pillar, i) => (
            <m.article
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`card-hover rounded-2xl border bg-[#141414] p-5 ${
                pillar.featured
                  ? "border-[rgba(201,168,76,0.4)] bg-gradient-to-br from-[#141414] to-[rgba(201,168,76,0.06)]"
                  : "border-[rgba(201,168,76,0.15)]"
              }`}
            >
              <h3 className="mb-2 text-[0.95rem] font-bold text-[#c9a84c]">{pillar.title}</h3>
              <p className="text-[0.82rem] leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
