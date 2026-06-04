"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { dispatchRevaCommand } from "@/lib/reva-command-events";

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 0014 0h-2zm-1 6.5V21h-4v-3.5H7V19h10v-1.5h-1z" />
    </svg>
  );
}

function AttachIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 6.5v9a4.5 4.5 0 01-9 0v-10a3 3 0 016 0v8a1.5 1.5 0 01-3 0v-6.5H8v6.5a4.5 4.5 0 009 0v-10a5 5 0 00-10 0v10a7 7 0 0014 0V6.5h-1.5z" />
    </svg>
  );
}

export function RevaCommandBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.classList.add("has-reva-command-bar");
    return () => document.body.classList.remove("has-reva-command-bar");
  }, []);

  const submit = useCallback(() => {
    const val = query.trim();
    if (!val) return;
    setQuery("");

    if (pathname === "/reva") {
      dispatchRevaCommand(val);
      return;
    }

    router.push(`/reva?q=${encodeURIComponent(val)}`);
  }, [query, pathname, router]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    const note = `[Attached: ${file.name}]`;
    if (pathname === "/reva") {
      dispatchRevaCommand(note);
    } else {
      router.push(`/reva?q=${encodeURIComponent(note)}`);
    }
  };

  return (
    <div
      id="reva-command-bar"
      className={`fixed bottom-7 left-1/2 z-[900] w-[min(680px,92vw)] -translate-x-1/2 transition-transform duration-300 ease-out max-md:bottom-[18px] max-md:w-[calc(100vw-22px)] ${
        collapsed ? "translate-y-[calc(100%-42px)]" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="reva-minimize mb-1.5 ml-auto mr-0 flex rounded-full border border-[rgba(201,168,76,0.25)] bg-[#141414] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-text-muted transition hover:border-[rgba(201,168,76,0.45)] hover:text-[#c9a84c]"
      >
        REVA hide/show
      </button>

      <div
        className={`reva-full flex items-center gap-2.5 rounded-full border-[1.5px] border-[#c9a84c] px-3 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(201,168,76,0.1)] transition-opacity sm:gap-2.5 sm:px-4 ${
          collapsed ? "opacity-20" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(13,13,13,0.97), rgba(25,20,10,0.97))",
        }}
      >
        <Image
          src="/images/metaboliq-icon.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-full border-[1.5px] border-[#c9a84c] object-cover"
        />
        <span className="hidden shrink-0 text-[0.82rem] font-bold tracking-[0.05em] text-[#c9a84c] sm:inline">
          ASK REVA
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          placeholder="Ask about your metabolism, food, phases, markers..."
          className="min-w-0 flex-1 border-none bg-transparent text-[0.88rem] text-text-primary outline-none placeholder:text-text-placeholder"
          aria-label="Ask REVA"
        />
        <button
          type="button"
          title="Voice input"
          onClick={() => {
            if (pathname === "/reva") {
              dispatchRevaCommand("[Voice check-in — alpha preview]");
            }
          }}
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.04)] text-text-secondary transition hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c]"
        >
          <MicIcon />
        </button>
        <label
          title="Upload file"
          className="flex h-[34px] w-[34px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.04)] text-text-secondary transition hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c]"
        >
          <AttachIcon />
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            accept="image/*,.pdf"
            onChange={onFile}
          />
        </label>
        <button
          type="button"
          onClick={submit}
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-none bg-gradient-to-br from-[#8b6914] to-[#c9a84c] text-[0.95rem] font-bold text-[#0d0d0d] transition hover:from-[#c9a84c] hover:to-[#e8c76a]"
          aria-label="Send to REVA"
        >
          →
        </button>
      </div>
    </div>
  );
}
