import { z } from "zod";

const emailFormat = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const signupTypeSchema = z.enum(["user", "founder"], {
  message: "Registration type must be user or founder.",
});

const profileFields = {
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(80, "First name is too long."),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .max(80, "Last name is too long."),
  country: z.string().trim().max(120, "Country is too long.").optional().or(z.literal("")),
  primaryInterest: z.string().trim().max(80).optional().or(z.literal("")),
  whatBringsYouHere: z
    .string()
    .trim()
    .max(2000, "Please keep your response under 2000 characters.")
    .optional()
    .or(z.literal("")),
};

export const betaApplicationSchema = z.object({
  ...profileFields,
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required.")
    .email("Please enter a valid email (e.g. you@company.com).")
    .refine((value) => emailFormat.test(value), {
      message: "Email must include @ and a valid domain (e.g. .com).",
    }),
  tier: signupTypeSchema,
});

/** @deprecated Use betaApplicationSchema */
export const emailSchema = betaApplicationSchema;

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

export type BetaApplicationInput = z.infer<typeof betaApplicationSchema>;

export function normalizeApplicationData(data: BetaApplicationInput) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    country: data.country || null,
    primaryInterest: data.primaryInterest || null,
    whatBringsYouHere: data.whatBringsYouHere || null,
    email: data.email,
    isVip: data.tier === "founder",
  };
}
