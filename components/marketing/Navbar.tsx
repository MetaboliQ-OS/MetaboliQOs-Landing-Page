"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#my-story", label: "My Story" },
  { href: "#mrrru", label: "MRRRU" },
  { href: "#platform", label: "Platform" },
  { href: "#phases", label: "Phases" },
  { href: "#alpha", label: "Alpha" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-[rgba(201,168,76,0.12)] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
    >
      <div className="container-main flex h-[60px] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/metaboliq-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.25)]"
            priority
          />
          <span className="text-lg font-semibold tracking-wide">
            MetaboliQ<span className="gold-text"> OS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#c8bfa8] transition hover:text-[#f5f0e8]"
            >
              {link.label}
            </a>
          ))}
          <a href="#alpha" className="badge badge-gold">
            Alpha · Coming Soon
          </a>
        </nav>

        <button
          type="button"
          className="btn-ghost px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="container-main border-t border-[rgba(201,168,76,0.12)] pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[#c8bfa8]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
