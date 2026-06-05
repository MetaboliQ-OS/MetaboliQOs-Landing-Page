"use client";

import { m } from "framer-motion";
import { mrrruLetters } from "@/lib/marketing-content";

export function MRRRUSection() {
  return (
    <section id="mrrru" className="py-14 md:py-16" style={{ background: "#0d0d0d" }}>
      <div className="container-main">
        <div className="glass overflow-hidden rounded-3xl border border-[rgba(201,168,76,0.2)] p-6 md:p-8 lg:p-10">
          <div className="mb-6 md:mb-8">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight">
              <span className="gold-text">MRRRU</span> Is My Battle Cry For Rebuilding Health
            </h2>
            <div className="gold-line mb-0" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-5 gap-2 sm:gap-2.5"
            >
              {mrrruLetters.map((item) => (
                <div
                  key={item.letter + item.title}
                  className="card-hover flex min-h-[128px] flex-col items-center justify-center rounded-xl border border-[rgba(201,168,76,0.18)] bg-[#111111] px-1 py-3 text-center sm:min-h-[148px] sm:rounded-2xl sm:px-1.5 sm:py-4"
                >
                  <div
                    className="text-[2rem] font-black leading-none sm:text-[2.35rem]"
                    style={{ fontFamily: "var(--font-head)", color: item.color }}
                  >
                    {item.letter}
                  </div>
                  <div className="mt-2 text-[0.58rem] font-bold uppercase leading-tight tracking-wide text-text-secondary sm:text-[0.62rem]">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-[0.55rem] leading-tight text-text-muted sm:text-[0.6rem]">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="space-y-4"
            >
              <p className="text-[0.98rem] leading-relaxed text-text-secondary md:text-base">
                MRRRU is the word I used when the craving hit, when the workout was hard, when
                everyone else was eating freely, and when my old habits tried to pull me back. It
                reminded me why I started.
              </p>
              <blockquote className="rounded-2xl border border-[rgba(201,168,76,0.15)] border-l-[3px] border-l-[#c9a84c] bg-[rgba(0,0,0,0.35)] px-4 py-4 italic leading-relaxed text-text-secondary sm:px-5 sm:py-5">
                &ldquo;When the craving hits at 11pm. When you&apos;re staring at bread at dinner.
                When the workout feels impossible at day 47. You say it.{" "}
                <strong className="text-[#c9a84c]">MRRRU.</strong> It is your biology fighting
                back. And your mission overriding it.&rdquo;
                <footer className="mt-3 block text-sm not-italic text-text-muted">
                  — Mru Patel
                </footer>
              </blockquote>
              <p className="text-sm leading-relaxed text-text-muted">
                MRRRU is not just a framework. It is the moment you choose data over desire.
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
