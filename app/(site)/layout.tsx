import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ThemeToggle } from "@/components/site/ThemeToggle";

/** Every public page shares one header (with the V1 menus) and one footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--surface-2)] focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader themeToggle={<ThemeToggle />} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
