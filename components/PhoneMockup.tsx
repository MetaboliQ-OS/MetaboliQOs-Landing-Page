"use client";

import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto mt-8 h-[560px] w-[290px] rounded-[42px] border border-[rgba(201,168,76,0.35)] bg-[#0f0f0f] p-3 shadow-[0_0_60px_rgba(201,168,76,0.25)]"
    >
      <div className="h-full w-full rounded-[32px] bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a] p-5">
        <div className="mb-4 h-2 w-14 rounded-full bg-[#2f2f2f]" />
        <div className="space-y-4">
          {["Glucose Insights", "Stress Recovery", "Sleep Rhythm", "Metabolic Score"].map(
            (item) => (
              <div key={item} className="glass rounded-2xl p-3">
                <p className="text-sm text-[#c8bfa8]">{item}</p>
                <div className="mt-2 h-2 rounded-full bg-[#262626]">
                  <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-[#e8c76a] to-[#c9a84c]" />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.28),transparent_70%)]" />
    </motion.div>
  );
}
