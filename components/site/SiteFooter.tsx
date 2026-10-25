import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav, socialChannels, startJourneyHref } from "@/lib/nav";

/** Live V1 footer (§12): brand line, navigation, legal links, disclaimer, socials. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-2)] pb-8 pt-14">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <Image src="/images/metaboliq-icon.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="text-lg font-semibold">
                MetaboliQ<span className="gold-text"> OS</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-text-primary">MetaboliQ OS powered by MRRRU</p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-text-muted">
              Personalised decisions for food, movement, sleep, stress and longevity.
            </p>
            <Link href={startJourneyHref} className="btn-gold mt-5 text-sm">
              Start My Journey
            </Link>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-text-muted">Explore</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition hover:text-[var(--gold-ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-text-muted">Legal</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition hover:text-[var(--gold-ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-3 mt-6 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-text-muted">Follow</p>
            <ul className="flex flex-wrap gap-2">
              {socialChannels.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-xs text-text-secondary transition hover:text-text-primary"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--gold-wash)] p-4 text-[0.8rem] leading-relaxed text-text-muted">
          MetaboliQ OS provides educational information and coaching support. It does not diagnose, prescribe or replace
          medical care. Consult a qualified clinician before changing medication or treatment.
        </p>

        <p className="mt-6 border-t border-[var(--line)] pt-6 text-[0.78rem] text-text-muted">
          © 2025–{year} MetaboliQ OS · Powered by MRRRU · eWealthTech Ltd · All rights reserved
        </p>
      </div>
    </footer>
  );
}
