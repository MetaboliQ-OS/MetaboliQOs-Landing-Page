import { z } from "zod";

const baseSchema = z.object({
  DATABASE_URL: z.string().min(1),
  ADMIN_SECRET: z.string().min(8),
  OTP_TTL_MINUTES: z.coerce.number().int().positive().default(10),
  OTP_MAX_REQUESTS_PER_HOUR: z.coerce.number().int().positive().default(5),
  CRON_SECRET: z.string().min(16).optional(),
});

/** Resend: `email@domain.com` or `Display Name <email@domain.com>` */
const resendFromSchema = z
  .string()
  .min(1)
  .refine(
    (value) =>
      /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) ||
      /^.+<[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+>$/.test(value.trim()),
    {
      message:
        'RESEND_FROM must be email@yourdomain.com or Name <email@yourdomain.com> (not a bare domain)',
    },
  );

const resendSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM: resendFromSchema,
});

export type AppEnv = z.infer<typeof baseSchema> &
  z.infer<typeof resendSchema> & {
    emailConfigured: boolean;
  };

let cachedEnv: AppEnv | null = null;

export function getEnv(): AppEnv {
  if (cachedEnv) return cachedEnv;

  const base = baseSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    ADMIN_SECRET: process.env.ADMIN_SECRET,
    OTP_TTL_MINUTES: process.env.OTP_TTL_MINUTES ?? 10,
    OTP_MAX_REQUESTS_PER_HOUR: process.env.OTP_MAX_REQUESTS_PER_HOUR ?? 5,
    CRON_SECRET: process.env.CRON_SECRET,
  });

  const resendValues = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM,
  };

  const emailConfigured =
    Boolean(resendValues.RESEND_API_KEY) && Boolean(resendValues.RESEND_FROM);

  const resend = emailConfigured
    ? resendSchema.parse(resendValues)
    : {
        RESEND_API_KEY: "",
        RESEND_FROM: "",
      };

  cachedEnv = { ...base, ...resend, emailConfigured };
  return cachedEnv;
}

export function isEmailConfigured() {
  return getEnv().emailConfigured;
}
