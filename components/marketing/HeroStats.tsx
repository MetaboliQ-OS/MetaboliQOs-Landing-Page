"use client";

import { m } from "framer-motion";
import { heroStats } from "@/lib/marketing-content";

export function HeroStats() {
  return (
    <m.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden shrink-0 flex-col gap-3 lg:flex"
    >
      {heroStats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl px-5 py-4">
          <div
            className={`text-3xl font-bold ${stat.color}`}
            style={{ fontFamily: "var(--font-head)" }}
          >
            {stat.value}
          </div>
          <div className="text-[0.72rem] uppercase tracking-[0.1em] text-text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </m.div>
  );
}
