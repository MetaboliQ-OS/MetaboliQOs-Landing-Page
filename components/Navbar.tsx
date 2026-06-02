"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 mx-auto mt-6 w-[92%] max-w-6xl rounded-full glass px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">
          MetaboliQ<span className="gold-text"> OS</span>
        </div>
        <a
          href="#waitlist"
          className="rounded-full px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
        >
          Join Waitlist
        </a>
      </div>
    </motion.nav>
  );
}
