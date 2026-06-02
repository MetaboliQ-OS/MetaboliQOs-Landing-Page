import { z } from "zod";

const emailFormat = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export const emailSchema = z.object({
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

export const verifyOtpSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email.")
    .refine((value) => emailFormat.test(value), {
      message: "Invalid email format.",
    }),
  otp: z.string().regex(/^\d{6}$/, "OTP must be exactly 6 digits."),
});
