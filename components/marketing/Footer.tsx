import { socialLinks } from "@/lib/marketing-content";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.12)] py-10">
      <div className="container-main flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="text-lg font-semibold">
            MetaboliQ<span className="gold-text"> OS</span>
          </p>
          <p className="mt-1 text-sm text-[#7a7060]">
            Powered by MRRRU · Alpha Marketing Site
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#c8bfa8] underline-offset-2 hover:text-[#c9a84c] hover:underline"
            >
              {s.name}
            </a>
          ))}
        </div>
        <p className="text-sm text-[#7a7060]">
          © {new Date().getFullYear()} MetaboliQ OS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
