"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";
export const THEME_KEY = "mq-theme";

// The <html data-theme> attribute is the source of truth; the inline script in
// app/layout.tsx sets it before paint so there is no flash of the wrong theme.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

/** Light/dark switch (Live V1 §13: preference persists without affecting readability). */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be blocked; the choice still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] text-text-secondary transition hover:text-[var(--gold-ink)]"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
