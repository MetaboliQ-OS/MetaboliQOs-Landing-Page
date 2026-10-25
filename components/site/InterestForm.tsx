"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { PARTNERSHIP_INTERESTS } from "@/lib/interest";

const inputCls =
  "w-full rounded-xl border border-[var(--line-strong)] bg-[var(--background)] px-4 py-3 text-text-primary placeholder:text-text-placeholder focus:border-[var(--gold-ink)] focus:outline-none";

function Field({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-text-primary">
        {label}
        {optional ? <span className="ml-1 font-normal text-text-muted">(optional)</span> : null}
      </label>
      {children}
    </div>
  );
}

/** Partner / corporate interest form (Live V1 §12). Interest only — no payment or patient records. */
export function InterestForm({ type }: { type: "partner" | "corporate" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const p = (k: string) => `${type}-${k}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "");
    const payload =
      type === "partner"
        ? { type, name: get("name"), workEmail: get("workEmail"), organisation: get("organisation"), role: get("role"), country: get("country"), interest: get("interest"), message: get("message") }
        : { type, name: get("name"), workEmail: get("workEmail"), organisation: get("organisation"), country: get("country"), population: get("population"), interest: get("interest"), message: get("message") };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          contactConsent: f.get("contactConsent") === "on",
          marketingOptIn: f.get("marketingOptIn") === "on",
          website: get("website"),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        // Field-level messages (422) are specific; anything else gets the standard error copy.
        throw new Error(res.status === 422 && data.message ? data.message : "We could not submit your details. Please try again.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We could not submit your details. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-6">
        <p className="text-lg font-semibold text-text-primary">
          Thank you. We have received your interest and will contact you using the details provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={p("name")} label="Name">
          <input id={p("name")} name="name" required autoComplete="name" className={inputCls} />
        </Field>
        <Field id={p("workEmail")} label="Work email">
          <input id={p("workEmail")} name="workEmail" type="email" required autoComplete="email" className={inputCls} />
        </Field>
        <Field id={p("organisation")} label="Organisation">
          <input id={p("organisation")} name="organisation" required autoComplete="organization" className={inputCls} />
        </Field>
        {type === "partner" ? (
          <Field id={p("role")} label="Role">
            <input id={p("role")} name="role" required autoComplete="organization-title" className={inputCls} />
          </Field>
        ) : (
          <Field id={p("population")} label="Workforce or member population" optional>
            <input id={p("population")} name="population" className={inputCls} placeholder="e.g. 500 employees" />
          </Field>
        )}
        <Field id={p("country")} label="Country">
          <input id={p("country")} name="country" required autoComplete="country-name" className={inputCls} />
        </Field>
        {type === "partner" ? (
          <Field id={p("interest")} label="Partnership interest">
            <select id={p("interest")} name="interest" required defaultValue="" className={inputCls}>
              <option value="" disabled>
                Choose one
              </option>
              {PARTNERSHIP_INTERESTS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        ) : (
          <Field id={p("interest")} label="Area of interest">
            <input id={p("interest")} name="interest" required className={inputCls} />
          </Field>
        )}
      </div>
      <Field id={p("message")} label="Message" optional>
        <textarea id={p("message")} name="message" rows={4} className={inputCls} />
      </Field>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
        <input name="contactConsent" type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-ink)]" />
        <span>
          Please contact me about this enquiry. I have read the{" "}
          <Link href="/privacy" className="font-semibold text-[var(--gold-ink)] underline-offset-4 hover:underline">
            Privacy Notice
          </Link>
          .
        </span>
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
        <input name="marketingOptIn" type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-ink)]" />
        Send me occasional MetaboliQ OS updates. (Optional)
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm text-[var(--red)]">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn-gold w-full justify-center disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Submitting…" : type === "partner" ? "Join the Founders Waitlist" : "Register Corporate Interest"}
      </button>
    </form>
  );
}
