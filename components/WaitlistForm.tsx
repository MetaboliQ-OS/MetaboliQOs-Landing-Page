"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { m, AnimatePresence } from "framer-motion";
import type { SendOtpResponse, VerifyOtpResponse } from "@/types/auth";
import { betaApplicationSchema } from "@/lib/validations";
import {
  PRIMARY_INTEREST_OPTIONS,
  type PrimaryInterestValue,
  type SignupType,
} from "@/lib/waitlist";

const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "Enter the 6-digit code from your email."),
});

type Step = "application" | "otp" | "success";

type ApplicationValues = z.infer<typeof betaApplicationSchema>;

function signupFromHash(): SignupType {
  if (typeof window === "undefined") return "user";
  return window.location.hash === "#founding" ? "founder" : "user";
}

const inputClass =
  "w-full rounded-xl border border-[rgba(201,168,76,0.25)] bg-[#0c0b09] px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-placeholder focus:border-[#c9a84c] focus:ring-2 focus:ring-[rgba(201,168,76,0.22)]";

const labelClass =
  "mb-1.5 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#c9a84c]";

export function WaitlistForm() {
  const [step, setStep] = useState<Step>("application");
  const [pendingApplication, setPendingApplication] = useState<ApplicationValues | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const applicationForm = useForm<ApplicationValues>({
    resolver: zodResolver(betaApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      primaryInterests: [] as PrimaryInterestValue[],
      whatBringsYouHere: "",
      tier: "user",
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const selectedTier = applicationForm.watch("tier");

  useEffect(() => {
    function applyHashSignup() {
      applicationForm.setValue("tier", signupFromHash());
    }

    applyHashSignup();
    window.addEventListener("hashchange", applyHashSignup);
    return () => window.removeEventListener("hashchange", applyHashSignup);
  }, [applicationForm]);

  async function submitApplication(values: ApplicationValues) {
    setSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: SendOtpResponse = await response.json();
      if (!response.ok) {
        setError(data.message);
        return;
      }
      if (data.upgraded) {
        setPendingApplication(values);
        setStep("success");
        setMessage(data.message);
        return;
      }
      setPendingApplication(values);
      setStep("otp");
      setMessage(`We sent a 6-digit code to ${values.email}. Check your inbox.`);
      otpForm.reset({ otp: "" });
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function resendOtp() {
    if (!pendingApplication) return;
    setSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingApplication),
      });
      const data: SendOtpResponse = await response.json();
      if (!response.ok) {
        setError(data.message);
        return;
      }
      setMessage(`A new code was sent to ${pendingApplication.email}.`);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitOtp(values: z.infer<typeof otpSchema>) {
    if (!pendingApplication) return;
    setSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: pendingApplication.email, otp: values.otp }),
      });
      const data: VerifyOtpResponse = await response.json();
      if (!response.ok) {
        setError(data.message);
        return;
      }
      setStep("success");
      setMessage("");
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const isFounder = pendingApplication?.tier === "founder" || selectedTier === "founder";

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[rgba(201,168,76,0.28)] bg-gradient-to-b from-[#17140f] to-[#0b0a09] p-7 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
      />

      <AnimatePresence mode="wait">
        {step === "application" && (
          <m.form
            key="application-step"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            onSubmit={applicationForm.handleSubmit(submitApplication)}
            className="space-y-5"
          >
            <div>
              <h3
                className="text-[clamp(1.6rem,3vw,2rem)] leading-tight text-text-primary"
                style={{ fontFamily: "var(--font-head)" }}
              >
                Apply for Beta Access
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c9a84c]">
                Complete this form. Applications reviewed within 24 hours. No payment required to
                join beta.
              </p>
            </div>

            <fieldset className="space-y-2">
              <legend className={labelClass}>Application type *</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                    selectedTier === "user"
                      ? "border-[rgba(74,158,232,0.45)] bg-[rgba(74,158,232,0.08)]"
                      : "border-[rgba(201,168,76,0.18)] bg-[#0c0b09]"
                  }`}
                >
                  <input
                    type="radio"
                    value="user"
                    className="accent-[#4a9ee8]"
                    {...applicationForm.register("tier")}
                  />
                  <span className="text-sm font-semibold text-text-primary">User</span>
                </label>
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                    selectedTier === "founder"
                      ? "border-[rgba(201,168,76,0.55)] bg-[rgba(201,168,76,0.1)]"
                      : "border-[rgba(201,168,76,0.18)] bg-[#0c0b09]"
                  }`}
                >
                  <input
                    type="radio"
                    value="founder"
                    className="accent-[#c9a84c]"
                    {...applicationForm.register("tier")}
                  />
                  <span className="text-sm font-semibold text-[#e8c76a]">Founder</span>
                </label>
              </div>
              {applicationForm.formState.errors.tier && (
                <p className="text-xs text-red-400">
                  {applicationForm.formState.errors.tier.message}
                </p>
              )}
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="firstName">
                  First name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className={inputClass}
                  {...applicationForm.register("firstName")}
                />
                {applicationForm.formState.errors.firstName && (
                  <p className="mt-1 text-xs text-red-400">
                    {applicationForm.formState.errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="lastName">
                  Last name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={inputClass}
                  {...applicationForm.register("lastName")}
                />
                {applicationForm.formState.errors.lastName && (
                  <p className="mt-1 text-xs text-red-400">
                    {applicationForm.formState.errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                className={inputClass}
                {...applicationForm.register("email")}
              />
              {applicationForm.formState.errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {applicationForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="country">
                Country
              </label>
              <input
                id="country"
                type="text"
                placeholder="UAE, UK, USA, India..."
                autoComplete="country-name"
                className={inputClass}
                {...applicationForm.register("country")}
              />
            </div>

            <fieldset className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <legend className={labelClass}>Primary interests (select all that apply)</legend>
                <Controller
                  name="primaryInterests"
                  control={applicationForm.control}
                  render={({ field }) => {
                    const allValues = PRIMARY_INTEREST_OPTIONS.map((option) => option.value);
                    const allSelected = allValues.every((value) => field.value.includes(value));
                    return (
                      <button
                        type="button"
                        className="text-xs text-[#e8c76a] underline-offset-2 hover:underline"
                        onClick={() => field.onChange(allSelected ? [] : allValues)}
                      >
                        {allSelected ? "Clear all" : "Select all"}
                      </button>
                    );
                  }}
                />
              </div>
              <Controller
                name="primaryInterests"
                control={applicationForm.control}
                render={({ field }) => (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {PRIMARY_INTEREST_OPTIONS.map((option) => {
                      const checked = field.value.includes(option.value);
                      return (
                        <label
                          key={option.value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${
                            checked
                              ? "border-[rgba(201,168,76,0.45)] bg-[rgba(201,168,76,0.08)] text-text-primary"
                              : "border-[rgba(201,168,76,0.18)] bg-[#0c0b09] text-text-secondary"
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="accent-[#c9a84c]"
                            checked={checked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, option.value]);
                              } else {
                                field.onChange(
                                  field.value.filter((value) => value !== option.value),
                                );
                              }
                            }}
                          />
                          {option.label}
                        </label>
                      );
                    })}
                  </div>
                )}
              />
              {applicationForm.formState.errors.primaryInterests && (
                <p className="text-xs text-red-400">
                  {applicationForm.formState.errors.primaryInterests.message}
                </p>
              )}
            </fieldset>

            <div>
              <label className={labelClass} htmlFor="whatBringsYouHere">
                What brings you here? (optional)
              </label>
              <textarea
                id="whatBringsYouHere"
                rows={4}
                placeholder="e.g. HbA1c concerns, weight goals, blood pressure, energy, longevity — the more context you share, the better your onboarding call will be."
                className={`${inputClass} resize-y`}
                {...applicationForm.register("whatBringsYouHere")}
              />
              {applicationForm.formState.errors.whatBringsYouHere && (
                <p className="mt-1 text-xs text-red-400">
                  {applicationForm.formState.errors.whatBringsYouHere.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full justify-center text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? "Sending OTP…"
                : selectedTier === "founder"
                  ? "Send OTP — Founder Application →"
                  : "Send OTP — Beta Application →"}
            </button>

            <p className="text-center text-[0.7rem] leading-relaxed text-text-muted">
              No payment required now. No auto-charge ever. Your data is never sold or shared.
              Unsubscribe anytime.
            </p>
            <p className="text-center text-[0.65rem] text-text-muted">www.metaboliQOS.com</p>
          </m.form>
        )}

        {step === "otp" && pendingApplication && (
          <m.form
            key="otp-step"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            onSubmit={otpForm.handleSubmit(submitOtp)}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a84c]">Verify Email</p>
            <h3 className="text-2xl font-semibold">Enter your OTP</h3>
            <p className="text-sm text-text-secondary">
              Code sent to{" "}
              <span className="text-text-primary">{pendingApplication.email}</span>
            </p>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="000000"
              className="w-full rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0f0f0f] px-4 py-3 text-center text-2xl tracking-[0.4em] text-text-primary outline-none focus:border-[#c9a84c]"
              {...otpForm.register("otp", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6);
                },
              })}
            />
            {otpForm.formState.errors.otp && (
              <p className="text-xs text-red-400">{otpForm.formState.errors.otp.message}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full justify-center text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Verifying…" : "Verify & Submit Application"}
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={resendOtp}
              className="w-full text-sm text-text-secondary underline-offset-2 hover:text-[#e8c76a] hover:underline disabled:opacity-50"
            >
              Resend code
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("application");
                setError("");
                setMessage("");
              }}
              className="w-full text-sm text-text-secondary hover:text-text-primary"
            >
              Edit application
            </button>
          </m.form>
        )}

        {step === "success" && (
          <m.div
            key="success-step"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">
              {isFounder ? "🎉 VIP Founding Application Received" : "🎉 Beta Application Received"}
            </h3>
            <p className="text-text-secondary">
              {isFounder
                ? "You're registered as a VIP founding member. Check your inbox for a welcome email."
                : "You're registered on the beta waitlist. We'll review your application within 24 hours."}
            </p>
          </m.div>
        )}
      </AnimatePresence>

      {message && <p className="mt-4 text-sm text-[#e8c76a]">{message}</p>}
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </m.div>
  );
}
