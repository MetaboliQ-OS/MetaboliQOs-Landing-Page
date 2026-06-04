import type { ReactNode } from "react";
import Image from "next/image";
import {
  footerJourneyLinks,
  footerLegalLinks,
  footerPlatformLinks,
} from "@/lib/marketing-content";

const socialIcons: {
  name: string;
  href: string;
  bg: string;
  border?: string;
  icon: ReactNode;
}[] = [
  {
    name: "YouTube",
    href: "https://youtube.com/@mrupatel",
    bg: "#FF0000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/MruPatelEntrepreneur",
    bg: "#1877F2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mrupatel",
    bg: "#0A66C2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@mrupatel",
    bg: "#010101",
    border: "1px solid rgba(255,255,255,0.15)",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.54V6.77a4.85 4.85 0 01-1.04-.08z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mrupatel",
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-text-muted">
        {title}
      </p>
      <nav className="flex flex-col gap-2" aria-label={title}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.85rem] text-text-secondary transition hover:text-[#c9a84c]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[rgba(201,168,76,0.12)] pt-14 pb-8"
      style={{ background: "#141414" }}
    >
      <div className="container-main">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Image
              src="/images/metaboliq-icon.png"
              alt="MetaboliQ OS"
              width={160}
              height={44}
              className="mb-4 h-11 w-auto object-contain object-left"
            />
            <p className="mb-4 max-w-sm text-[0.85rem] leading-relaxed text-text-muted">
              A founder-proven metabolic operating system. Built from data, not theory. Ongoing
              longevity journey. Phase 2 of 6 — publicly documented.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socialIcons.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] opacity-90 transition hover:scale-105 hover:opacity-100"
                  style={{
                    background: s.bg,
                    border: s.border,
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Platform" links={footerPlatformLinks} />
          <FooterLinkColumn title="Journey" links={footerJourneyLinks} />

          <div>
            <FooterLinkColumn title="Legal" links={footerLegalLinks} />
            <div className="mt-5 rounded-lg border border-[rgba(224,82,82,0.2)] bg-[rgba(224,82,82,0.06)] p-3">
              <p className="text-[0.72rem] leading-relaxed text-text-muted">
                MetaboliQ OS is an educational intelligence platform. Not medical advice. Always
                consult a qualified clinician before changing medications or treatment protocols.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[rgba(201,168,76,0.12)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.78rem] text-text-muted">
            © 2025–{year} MetaboliQ OS · Powered by MRRRU · eWealthTech Ltd · All rights reserved
          </p>
          <p className="text-[0.78rem] text-text-muted sm:text-right">
            Built by a founder. Tested on a founder. For founders and high performers who refuse to
            guess.
          </p>
        </div>
      </div>
    </footer>
  );
}
