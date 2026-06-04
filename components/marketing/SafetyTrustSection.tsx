"use client";

import { motion } from "framer-motion";
import { safetyTrustItems } from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function SafetyTrustSection() {
  return (
    <section
      id="safety-trust"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{
        background: "linear-gradient(180deg, #0d0d0d, #141414)",
      }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Trust layer"
          title="Safety, Trust & Claim Boundaries"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {safetyTrustItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card-hover rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-[#c9a84c]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
