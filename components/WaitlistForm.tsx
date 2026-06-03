"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import type { SendOtpResponse, VerifyOtpResponse } from "@/types/auth";

const emailFormat = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required.")
    .email("Please enter a valid email (e.g. you@company.com).")
    .refine((value) => emailFormat.test(value), {
      message: "Email must include @ and a valid domain (e.g. .com).",
    }),
});

const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "Enter the 6-digit code from your email."),
});

type Step = "email" | "otp" | "success";

export function WaitlistForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  async function submitEmail(values: z.infer<typeof emailSchema>) {
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
      setEmail(values.email);
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
    if (!email) return;
    setSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data: SendOtpResponse = await response.json();
      if (!response.ok) {
        setError(data.message);
        return;
      }
      setMessage(`A new code was sent to ${email}.`);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitOtp(values: z.infer<typeof otpSchema>) {
    setSubmitting(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: values.otp }),
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

  return (
    <motion.section
      id="waitlist"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[rgba(201,168,76,0.28)] bg-gradient-to-b from-[#17140f] to-[#0b0a09] p-7 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] sm:p-8"
    >
      {/* gold top accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
      />
      <AnimatePresence mode="wait">
        {step === "email" && (
          <motion.form
            key="email-step"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            onSubmit={emailForm.handleSubmit(submitEmail)}
            className="space-y-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
                Founding Access
              </p>
              <span className="rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-[#e8c76a]">
                50 spots only
              </span>
            </div>
            <h3
              className="text-[1.7rem] leading-tight text-[#f5f0e8]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Claim your MetaboliQ OS spot
            </h3>
            <p className="text-sm leading-relaxed text-[#c8bfa8]">
              Enter your email and we&apos;ll send a 6-digit code to verify you. Founding members
              lock in early pricing for life.
            </p>
            <input
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full rounded-xl border border-[rgba(201,168,76,0.25)] bg-[#0c0b09] px-4 py-3.5 text-[#f5f0e8] outline-none transition placeholder:text-[#6b6354] focus:border-[#c9a84c] focus:ring-2 focus:ring-[rgba(201,168,76,0.22)]"
              {...emailForm.register("email")}
            />
            {emailForm.formState.errors.email && (
              <p className="text-xs text-red-400">{emailForm.formState.errors.email.message}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full justify-center text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Sending code…" : "Claim My Spot"}
            </button>
            <p className="flex items-center justify-center gap-1.5 text-center text-[0.7rem] text-[#7a7060]">
              <span aria-hidden>🔒</span> Secure one-time code · No spam, ever
            </p>
          </motion.form>
        )}

        {step === "otp" && (
          <motion.form
            key="otp-step"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            onSubmit={otpForm.handleSubmit(submitOtp)}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a84c]">Verify Email</p>
            <h3 className="text-2xl font-semibold">Enter your OTP</h3>
            <p className="text-sm text-[#c8bfa8]">
              Code sent to <span className="text-[#f5f0e8]">{email}</span>
            </p>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="000000"
              className="w-full rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0f0f0f] px-4 py-3 text-center text-2xl tracking-[0.4em] text-[#f5f0e8] outline-none focus:border-[#c9a84c]"
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
              {submitting ? "Verifying…" : "Verify & Join Waitlist"}
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={resendOtp}
              className="w-full text-sm text-[#c8bfa8] underline-offset-2 hover:text-[#e8c76a] hover:underline disabled:opacity-50"
            >
              Resend code
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("email");
                setError("");
                setMessage("");
              }}
              className="w-full text-sm text-[#c8bfa8] hover:text-[#f5f0e8]"
            >
              Use a different email
            </button>
          </motion.form>
        )}

        {step === "success" && (
          <motion.div
            key="success-step"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">🎉 You&apos;re On The Waitlist</h3>
            <p className="text-[#c8bfa8]">
              Thank you for joining MetaboliQ OS.
              <br />
              Your email <span className="text-[#f5f0e8]">{email}</span> has been verified and
              saved.
              <br />
              We will notify you as soon as beta access becomes available.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {message && <p className="mt-4 text-sm text-[#e8c76a]">{message}</p>}
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </motion.section>
  );
}
