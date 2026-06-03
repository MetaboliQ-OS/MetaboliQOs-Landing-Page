import { z } from "zod";

const baseSchema = z.object({
  DATABASE_URL: z.string().min(1),
  ADMIN_SECRET: z.string().min(8),
  OTP_TTL_MINUTES: z.coerce.number().int().positive().default(10),
  OTP_MAX_REQUESTS_PER_HOUR: z.coerce.number().int().positive().default(5),
  CRON_SECRET: z.string().min(16).optional(),
});

const smtpSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  SMTP_FROM: z.string().min(1),
});

export type AppEnv = z.infer<typeof baseSchema> &
  z.infer<typeof smtpSchema> & {
    smtpConfigured: boolean;
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

  const smtpValues = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT ?? 587,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
  };

  const smtpConfigured =
    Boolean(smtpValues.SMTP_HOST) &&
    Boolean(smtpValues.SMTP_USER) &&
    Boolean(smtpValues.SMTP_PASS) &&
    Boolean(smtpValues.SMTP_FROM);

  const smtp = smtpConfigured
    ? smtpSchema.parse(smtpValues)
    : {
        SMTP_HOST: "",
        SMTP_PORT: 587,
        SMTP_USER: "",
        SMTP_PASS: "",
        SMTP_FROM: "",
      };

  cachedEnv = { ...base, ...smtp, smtpConfigured };
  return cachedEnv;
}

export function isSmtpConfigured() {
  return getEnv().smtpConfigured;
}
