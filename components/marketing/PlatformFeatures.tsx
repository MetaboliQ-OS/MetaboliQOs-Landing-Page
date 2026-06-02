"use client";

import { motion } from "framer-motion";
import { platformModules } from "@/lib/marketing-content";

export function PlatformFeatures() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <span className="badge badge-green mb-4">Alpha Build · Module Preview</span>
        <h2 className="gold-text mb-2 text-[clamp(2rem,4vw,3rem)] italic">
          What We&apos;re Building
        </h2>
        <div className="gold-line" />
        <p className="mb-10 max-w-2xl text-[#c8bfa8]">
          Capture signals. See the decision. Every module below is in active development — shaped
          by my proof and real metabolic data loops.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformModules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="mb-3 text-3xl">{mod.icon}</div>
              <h3 className="text-xl text-[#c9a84c]">{mod.title}</h3>
              <p className="text-xs uppercase tracking-wider text-[#7a7060]">{mod.subtitle}</p>
              <p className="mt-3 text-sm text-[#c8bfa8] leading-relaxed">{mod.description}</p>
              <ul className="mt-4 space-y-1.5">
                {mod.highlights.map((h) => (
                  <li key={h} className="text-xs text-[#c8bfa8] before:mr-2 before:text-[#c9a84c] before:content-['→']">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
