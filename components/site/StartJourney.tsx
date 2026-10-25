"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { appLinks } from "@/lib/nav";
import { questions, startingResult, type Answers } from "@/lib/start-journey";

type Step = "intro" | number | "result";

/**
 * Find My Starting Point — one question per screen with Back, Skip and visible
 * progress (Live V1 §11, §13). Answers stay in memory only and are kept when
 * moving back. No email or health data is needed to see the result.
 */
export function StartJourney() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Answers>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // Move focus to the new screen's heading so keyboard and screen-reader users follow along.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ block: "nearest" });
  }, [step]);

  const total = questions.length;

  if (step === "intro") {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h2 ref={headingRef} tabIndex={-1} className="text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-tight text-text-primary outline-none">
          Find My Starting Point
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
          Tell us what you want to improve and how you live today. We will suggest where to begin.
        </p>
        <p className="mt-3 text-sm text-text-muted">
          {total} short questions · skip any you prefer · no email needed to see your result
        </p>
        <button type="button" onClick={() => setStep(0)} className="btn-gold mt-8 w-full justify-center sm:w-auto">
          Begin
        </button>
      </div>
    );
  }

  if (step === "result") {
    return <Result answers={answers} headingRef={headingRef} onRestart={() => { setAnswers({}); setStep("intro"); }} />;
  }

  const q = questions[step];
  const selected = answers[q.id] ?? [];
  const isLast = step === total - 1;
  const next = () => setStep(isLast ? "result" : step + 1);
  const back = () => setStep(step === 0 ? "intro" : step - 1);
  const skip = () => {
    setAnswers((a) => {
      const copy = { ...a };
      delete copy[q.id];
      return copy;
    });
    next();
  };
  const toggle = (id: string) => {
    setAnswers((a) => {
      const current = a[q.id] ?? [];
      if (!q.multi) return { ...a, [q.id]: [id] };
      // "None" / "Nothing yet" style first options are exclusive with the rest.
      const exclusive = q.options[0].id;
      let nextIds = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      if (id === exclusive && nextIds.includes(exclusive)) nextIds = [exclusive];
      else nextIds = nextIds.filter((x) => x !== exclusive);
      return { ...a, [q.id]: nextIds };
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span aria-live="polite">
            Question {step + 1} of {total}
          </span>
          {q.multi ? <span>Choose any that apply</span> : null}
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-3)]"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={step + 1}
          aria-label="Progress"
        >
          <div className="h-full rounded-full bg-[var(--gold-ink)] transition-all duration-300" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>

      <fieldset>
        <legend className="w-full">
          <h2 ref={headingRef} tabIndex={-1} className="text-[clamp(1.6rem,5vw,2.3rem)] font-semibold leading-tight text-text-primary outline-none">
            {q.title}
          </h2>
        </legend>
        <div className="mt-6 grid gap-2.5">
          {q.options.map((o) => {
            const on = selected.includes(o.id);
            return (
              <label
                key={o.id}
                className={`flex min-h-[56px] cursor-pointer items-center gap-3.5 rounded-2xl border px-4 py-3 transition ${
                  on
                    ? "border-[var(--gold-ink)] bg-[var(--gold-wash)]"
                    : "border-[var(--line)] bg-[var(--surface-2)] hover:border-[var(--line-strong)]"
                }`}
              >
                <input
                  type={q.multi ? "checkbox" : "radio"}
                  name={q.id}
                  value={o.id}
                  checked={on}
                  onChange={() => toggle(o.id)}
                  className="h-5 w-5 shrink-0 accent-[var(--gold-ink)]"
                />
                <span className="text-[1rem] leading-snug text-text-primary">{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button type="button" onClick={back} className="btn-ghost px-5 py-3">
          Back
        </button>
        <div className="flex items-center gap-2">
          <button type="button" onClick={skip} className="px-3 py-3 text-sm font-semibold text-text-muted transition hover:text-text-primary">
            Skip
          </button>
          <button
            type="button"
            onClick={next}
            disabled={selected.length === 0}
            className="btn-gold px-5 py-3 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {isLast ? "See My Starting Focus" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Result({
  answers,
  headingRef,
  onRestart,
}: {
  answers: Answers;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
}) {
  const r = startingResult(answers);
  const planHref = `${appLinks.signUp}?focus=${encodeURIComponent(r.focusKey)}`;
  const [emailOpen, setEmailOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/start/email-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          consent: form.get("consent") === "on",
          website: form.get("website") ?? "",
          answers,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) throw new Error(data.message);
      setStatus("sent");
      setMessage(data.message ?? "Your results are on their way.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error && err.message ? err.message : "We could not send your results. Please try again.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--gold-ink)]">Your result</p>
      <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-[clamp(1.7rem,5vw,2.5rem)] font-semibold leading-snug text-text-primary outline-none">
        Your suggested starting focus is <span className="gold-text italic">{r.focus}</span>.
      </h2>
      <div className="gold-line" />
      <p className="text-lg leading-relaxed text-text-secondary">
        You told us {r.summary}. Begin with <strong className="text-text-primary">{r.action}</strong>.
      </p>
      <p className="mt-4 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-4 text-sm leading-relaxed text-text-muted">
        Based on your answers. This is a starting focus, not a diagnosis or a clinical phase assessment.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={planHref} className="btn-gold justify-center">
          View My Starting Plan
        </a>
        <button type="button" onClick={() => setEmailOpen((o) => !o)} aria-expanded={emailOpen} className="btn-ghost justify-center">
          Save My Results by Email
        </button>
      </div>

      {emailOpen && (
        <form onSubmit={onSubmit} className="mt-5 space-y-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5" noValidate={false}>
          {status === "sent" ? (
            <p role="status" className="font-semibold text-[var(--green)]">
              {message}
            </p>
          ) : (
            <>
              <div>
                <label htmlFor="start-email" className="mb-1.5 block text-sm font-semibold text-text-primary">
                  Email address
                </label>
                <input
                  id="start-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-[var(--line-strong)] bg-[var(--background)] px-4 py-3 text-text-primary placeholder:text-text-placeholder focus:border-[var(--gold-ink)] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              {/* Honeypot: hidden from people, tempting to bots. */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <label className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                <input name="consent" type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-ink)]" />
                Email me these results. We will only use your address to send them — this does not sign you up for
                marketing.
              </label>
              {status === "error" ? (
                <p role="alert" className="text-sm text-[var(--red)]">
                  {message}
                </p>
              ) : null}
              <button type="submit" disabled={status === "sending"} className="btn-gold w-full justify-center disabled:opacity-60 sm:w-auto">
                {status === "sending" ? "Sending…" : "Send My Results"}
              </button>
            </>
          )}
        </form>
      )}

      <button type="button" onClick={onRestart} className="mt-8 text-sm font-semibold text-text-muted underline-offset-4 hover:text-text-primary hover:underline">
        Start again
      </button>
    </div>
  );
}
