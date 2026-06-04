"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/#my-story", label: "My Story" },
  { href: "/reva", label: "REVA" },
  { href: "/#mrrru", label: "MRRRU" },
  { href: "/#demo-platform", label: "Platform" },
  { href: "/#phases", label: "Phases" },
  { href: "/#pillars", label: "9 Pillars" },
  { href: "/#alpha", label: "Alpha" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-[rgba(201,168,76,0.12)] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
    >
      <div className="container-main flex h-[60px] items-center justify-between gap-4">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/metaboliq-icon.png"
            alt="MetaboliQ OS logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.25)]"
            priority
          />
          <span className="text-lg font-semibold tracking-wide">
            MetaboliQ<span className="gold-text"> OS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-text-secondary transition hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href="/#alpha" className="badge badge-gold shrink-0 whitespace-nowrap">
            Alpha · Coming Soon
          </a>
        </nav>

        <button
          type="button"
          className="btn-ghost inline-flex shrink-0 px-3 py-2 text-sm lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          className="container-main border-t border-[rgba(201,168,76,0.12)] pb-4 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-text-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#alpha"
            onClick={() => setOpen(false)}
            className="badge badge-gold mt-2 inline-flex"
          >
            Alpha · Coming Soon
          </a>
        </nav>
      )}
    </motion.header>
  );
}
