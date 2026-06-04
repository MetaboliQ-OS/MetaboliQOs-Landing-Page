"use client";

import { motion } from "framer-motion";
import { metabolicMyths } from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function MythBustersSection() {
  return (
    <section
      id="myths"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Metabolic Truth"
          title="Myth Busters"
          subtitle="The founder has documented over 100 metabolic myths — debunked through his own experiments, peer-reviewed evidence and global expert research. Six shown here."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {metabolicMyths.map((item, i) => (
            <motion.article
              key={item.myth}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card-hover rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-5"
            >
              <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-wider text-[#E05252]">
                Myth
              </p>
              <p className="mb-3 text-sm font-semibold italic text-text-primary">
                &ldquo;{item.myth}&rdquo;
              </p>
              <p className="text-sm leading-relaxed text-text-secondary">{item.truth}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          See all 100+ metabolic myths debunked (full library in alpha app)
        </p>
      </div>
    </section>
  );
}
