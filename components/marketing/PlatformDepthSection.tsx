"use client";

import { motion } from "framer-motion";
import {
  compactRoadmap,
  platformDepthBullets,
  platformDepthCards,
} from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function PlatformDepthSection() {
  return (
    <section
      id="platform-depth"
      className="section-pad border-y border-[rgba(201,168,76,0.12)]"
      style={{
        background: "linear-gradient(180deg, #0d0d0d 0%, #141414 100%)",
      }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Locked v7.4 platform depth"
          title="Full Platform Engine — Not Just a Scanner"
          subtitle="This v7.4 build keeps the locked platform features, founder proof, FoodOS categories, upload flows, REVA examples, waitlist/email capture and interactive demos, with capture tools consolidated into the demo platform and specialist modules. Food scanning, FaceScan, wearables, CGM and blood markers now operate as entry points into the wider MRRRU decision system."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {platformDepthBullets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-4"
            >
              <p className="mb-1 text-sm font-bold text-[#c9a84c]">{b.title}</p>
              <p className="text-xs text-text-secondary">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {platformDepthCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover glass flex flex-col rounded-2xl p-6"
            >
              <span className="badge badge-gold mb-3 w-fit text-[0.6rem]">{card.badge}</span>
              <h3 className="mb-2 text-lg text-[#c9a84c]">{card.title}</h3>
              <p className="mb-4 flex-1 text-sm text-text-secondary">{card.desc}</p>
              <a href={card.href} className="btn-ghost w-fit text-sm">
                {card.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <div>
          <p className="badge badge-amber mb-3">Shortened roadmap</p>
          <h3 className="mb-2 text-2xl italic text-[#c9a84c]">Compact v6/V7 MVP Roadmap</h3>
          <p className="mb-8 max-w-2xl text-sm text-text-secondary">
            Short, buildable and investor-friendly: prove the decision loop first, then layer
            signals, then launch paid beta, then expand partners.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {compactRoadmap.map((step) => (
              <div
                key={step.phase}
                className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#0d0d0d] p-4"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                  {step.phase}
                </p>
                <p className="mb-2 text-sm font-semibold text-text-primary">{step.title}</p>
                <p className="text-xs text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
