"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  REVA_COMMAND_SUBMIT,
  type RevaCommandDetail,
} from "@/lib/reva-command-events";

const demoReply =
  "Alpha preview: REVA would analyse your question against your MRRRU phase, markers and Personal Metabolic Memory — then return next action, reason, risk and metric to watch. Join the founding waitlist for full access.";

export function RevaChatPanel() {
  const searchParams = useSearchParams();
  const initialHandled = useRef(false);
  const [messages, setMessages] = useState<{ role: "user" | "reva"; text: string }[]>([]);

  const pushUser = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "reva", text: demoReply },
    ]);
    requestAnimationFrame(() => {
      document.getElementById("reva-chat")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }, []);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q && !initialHandled.current) {
      initialHandled.current = true;
      pushUser(decodeURIComponent(q));
    }
  }, [searchParams, pushUser]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<RevaCommandDetail>).detail;
      if (detail?.message) pushUser(detail.message);
    };
    window.addEventListener(REVA_COMMAND_SUBMIT, handler);
    return () => window.removeEventListener(REVA_COMMAND_SUBMIT, handler);
  }, [pushUser]);

  return (
    <section
      id="reva-chat"
      className="mb-10 scroll-mt-24 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d]"
    >
      <div className="border-b border-[rgba(201,168,76,0.12)] px-4 py-3 sm:px-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">REVA AI</p>
        <p className="text-[0.72rem] text-text-muted">Ready · Alpha preview · Powered by MRRRU</p>
      </div>
      <div className="flex max-h-[320px] min-h-[200px] flex-col gap-3 overflow-y-auto p-4 sm:p-5">
        {messages.length === 0 ? (
          <p className="text-sm text-text-muted">
            Use the ASK REVA bar below to type a question, attach a file, or try voice input.
            Example: &ldquo;What is my current MRRRU phase recommendation?&rdquo;
          </p>
        ) : (
          messages.map((m, i) => (
            <div
              key={`${m.role}-${i}`}
              className={`max-w-[92%] rounded-xl px-3 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-[rgba(201,168,76,0.12)] text-text-primary"
                  : "mr-auto border border-[rgba(201,168,76,0.15)] bg-[#141414] text-text-secondary"
              }`}
            >
              {m.text}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
