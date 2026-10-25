"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { appLinks, mainNav, startJourneyHref, utilityNav, type NavSection } from "@/lib/nav";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  const path = href.split(/[?#]/)[0];
  return path !== "/" && (pathname === path || pathname.startsWith(`${path}/`));
}

/** Desktop dropdown: opens on hover, click or keyboard; Escape and outside clicks close it. */
function DesktopMenu({ section, pathname }: { section: NavSection; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, section.href);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const wide = section.items.length > 6;

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold transition ${
          active || open ? "text-[var(--gold-ink)]" : "text-text-secondary hover:text-text-primary"
        }`}
      >
        {section.label}
        <Chevron open={open} />
      </button>
      {open && (
        <div
          className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 ${wide ? "w-[440px]" : "w-[260px]"}`}
        >
          <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-2 shadow-[var(--shadow-card)]">
            <Link
              href={section.href}
              onClick={() => setOpen(false)}
              className="mb-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-[var(--gold-ink)] transition hover:bg-[var(--gold-wash)]"
            >
              {section.label} overview <span aria-hidden>→</span>
            </Link>
            <ul className={`grid gap-0.5 ${wide ? "grid-cols-2" : ""}`}>
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-text-secondary transition hover:bg-[var(--gold-wash)] hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/** Mobile / tablet: one menu, each section expandable (§13). */
function MobileSection({ section, onNavigate }: { section: NavSection; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-[var(--line)]">
      <div className="flex items-center">
        <Link
          href={section.href}
          onClick={onNavigate}
          className="flex-1 py-3.5 text-[1.02rem] font-semibold text-text-primary"
        >
          {section.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} ${section.label} pages`}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-xl text-text-muted transition hover:text-text-primary"
        >
          <Chevron open={open} />
        </button>
      </div>
      {open && (
        <ul className="grid grid-cols-1 gap-0.5 pb-3 min-[420px]:grid-cols-2">
          {section.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition hover:bg-[var(--gold-wash)] hover:text-text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function SiteHeader({ themeToggle }: { themeToggle?: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the mobile menu on navigation (back/forward included) and when the
  // viewport becomes desktop. Comparing during render avoids an extra effect pass.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && closeMenu();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl">
      {/* Audience + account links: a slim bar on desktop so the main row never wraps. */}
      <div className="hidden border-b border-[var(--line)] xl:block">
        <div className="container-main flex h-9 items-center justify-end gap-5 text-[0.78rem]">
          {utilityNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActive(pathname, link.href) ? "text-[var(--gold-ink)]" : "text-text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-[var(--line-strong)]" aria-hidden />
          <a href={appLinks.signIn} className="font-semibold text-text-secondary transition hover:text-text-primary">
            Sign In
          </a>
          {themeToggle}
        </div>
      </div>

      <div className="container-main flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="MetaboliQ OS home">
          <Image
            src="/images/metaboliq-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.25)]"
            priority
          />
          <span className="text-lg font-semibold tracking-wide max-[379px]:hidden">
            MetaboliQ<span className="gold-text"> OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {mainNav.map((section) => (
            <DesktopMenu key={section.href} section={section} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={startJourneyHref}
            className="btn-gold whitespace-nowrap px-3.5 py-2 text-[0.8rem] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Start My Journey
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--line-strong)] text-text-secondary transition hover:text-text-primary xl:hidden"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

      {/* Rendered outside <header>: the header's backdrop blur would otherwise
          become the containing block for this fixed panel and squash it. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-[60] overflow-y-auto bg-[var(--background)] xl:hidden"
        >
          <nav className="container-main pb-10 pt-2" aria-label="Mobile">
            <ul>
              {mainNav.map((section) => (
                <MobileSection key={section.href} section={section} onNavigate={closeMenu} />
              ))}
            </ul>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {utilityNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl border border-[var(--line)] px-3 py-3 text-center text-sm text-text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link href={startJourneyHref} onClick={closeMenu} className="btn-gold justify-center">
                Start My Journey
              </Link>
              <a href={appLinks.signIn} className="btn-ghost justify-center">
                Sign In
              </a>
            </div>
            {themeToggle ? <div className="mt-6 flex justify-center">{themeToggle}</div> : null}
          </nav>
        </div>
      )}
    </>
  );
}
