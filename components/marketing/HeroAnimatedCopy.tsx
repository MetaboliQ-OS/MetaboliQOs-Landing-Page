"use client";

import { m } from "framer-motion";
import { socialLinks } from "@/lib/marketing-content";

export function HeroAnimatedCopy() {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-4 max-w-xl text-lg text-text-secondary leading-relaxed">
        I rebuilt my own health by measuring everything: food, glucose, blood pressure, sleep,
        stress, body composition and blood markers.
      </p>

      <p className="mb-4 max-w-xl text-[0.95rem] text-text-secondary">
        Now I am building MetaboliQ OS so you can stop guessing and start making better daily
        decisions for your body.
      </p>

      <p className="mb-8 max-w-xl text-[0.95rem] text-text-muted">
        My documented 5-month turnaround: HbA1c{" "}
        <strong className="text-[#E05252]">8.3%</strong> →{" "}
        <strong className="text-[#4CAF7D]">5.3%</strong> · Weight{" "}
        <strong className="text-[#E05252]">83kg</strong> →{" "}
        <strong className="text-[#4CAF7D]">69kg</strong> · BP{" "}
        <strong className="text-[#E05252]">212/109</strong> →{" "}
        <strong className="text-[#4CAF7D]">124/80</strong> · Visceral fat{" "}
        <strong className="text-[#E05252]">15–16</strong> →{" "}
        <strong className="text-[#4CAF7D]">11</strong>. No GLP-1. No shortcuts. Data, discipline
        and a system.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Mru Patel on ${s.name}`}
            className="rounded-md px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
            style={{ background: s.color }}
          >
            {s.name}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a href="#waitlist" className="btn-gold">
          Join the Beta Waitlist →
        </a>
        <a href="#founding" className="btn-ghost border-[rgba(201,168,76,0.45)] text-[#c9a84c]">
          Become a Founding Member
        </a>
        <a href="#my-story" className="btn-ghost">
          My Story
        </a>
      </div>
    </m.div>
  );
}
