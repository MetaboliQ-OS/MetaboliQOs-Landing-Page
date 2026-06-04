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
        <p className="mb-10 max-w-2xl text-text-secondary">
          Capture signals. See the decision. Every module below is in active development — shaped
          by my proof and real metabolic data loops.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformModules.map((mod, i) => {
            const isFoodOs = mod.title === "MetaboliQ Food OS";

            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`glass card-hover rounded-2xl p-6 ${
                  isFoodOs ? "md:col-span-2 xl:col-span-3" : ""
                }`}
              >
                {isFoodOs ? (
                  <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                    <div>
                      <div className="mb-3 text-3xl">{mod.icon}</div>
                      <h3 className="text-xl text-[#c9a84c]">{mod.title}</h3>
                      <p className="text-xs uppercase tracking-wider text-text-muted">
                        {mod.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {mod.description}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {mod.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-xs text-text-secondary before:mr-2 before:text-[#c9a84c] before:content-['→']"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      {"sideNote" in mod && mod.sideNote ? (
                        <p className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.04)] p-4 text-sm leading-relaxed text-text-secondary">
                          {mod.sideNote}
                        </p>
                      ) : null}
                      {"promptExample" in mod && mod.promptExample ? (
                        <div className="rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d] p-3">
                          <p className="mb-2 text-[0.58rem] font-bold uppercase tracking-wider text-text-muted">
                            Example REVA prompt
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2.5 text-sm text-text-secondary">
                              {mod.promptExample}
                            </div>
                            <button
                              type="button"
                              aria-label="Voice input (demo)"
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.1)] text-lg text-[#c9a84c]"
                            >
                              🎤
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-3 text-3xl">{mod.icon}</div>
                    <h3 className="text-xl text-[#c9a84c]">{mod.title}</h3>
                    <p className="text-xs uppercase tracking-wider text-text-muted">
                      {mod.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {mod.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {mod.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-text-secondary before:mr-2 before:text-[#c9a84c] before:content-['→']"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    {"footerNote" in mod && mod.footerNote ? (
                      <p className="mt-4 rounded-xl border border-l-[3px] border-[rgba(201,168,76,0.15)] border-l-[#c9a84c] bg-[rgba(0,0,0,0.3)] px-3 py-3 text-xs leading-relaxed text-text-secondary">
                        {mod.footerNote}
                      </p>
                    ) : null}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
