import nodemailer from "nodemailer";
import { getEnv, isSmtpConfigured } from "@/lib/env";

function getTransporter() {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  const env = getEnv();

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    requireTLS: env.SMTP_PORT !== 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    // Fail fast instead of hanging when a host blocks outbound SMTP.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
}

/**
 * Single place that actually delivers mail. When we swap SMTP for an
 * HTTP provider (e.g. Resend), only this function changes — every caller
 * (OTP, weekly update, future emails) keeps working unchanged.
 */
async function sendEmail(opts: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = getTransporter();
  const env = getEnv();

  await transporter.sendMail({
    from: env.SMTP_FROM,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}

export async function sendOtpEmail(to: string, otp: string) {
  await sendEmail({
    to,
    subject: "Verify Your MetaboliQ OS Access",
    text: `Hello,

Your verification code is:

${otp}

This code expires in 10 minutes.

MetaboliQ OS Team`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111; max-width: 520px;">
        <p>Hello,</p>
        <p>Your verification code is:</p>
        <p style="font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #c9a84c;">${otp}</p>
        <p>This code expires in 10 minutes.</p>
        <p>MetaboliQ OS Team</p>
      </div>
    `,
  });
}

/**
 * Weekly update sent to verified waitlist members by the cron job.
 * Edit `weeklyUpdateContent()` each cycle (or wire it to a CMS later).
 */
export async function sendWeeklyUpdateEmail(to: string) {
  const { subject, text, html } = weeklyUpdateContent();
  await sendEmail({ to, subject, text, html });
}

function weeklyUpdateContent() {
  const subject = "MetaboliQ OS — This Week's Update";

  const text = `Hello,

Here's the latest from my MetaboliQ OS journey.

I'm building in public through alpha — documenting the data, the experiments, and the progress toward Personal Metabolic Memory. Thank you for being on the founding list.

More soon,
Mru Patel — MetaboliQ OS

You're receiving this because you joined the MetaboliQ OS waitlist.`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #c9a84c; margin-bottom: 4px;">MetaboliQ OS — Weekly Update</h2>
      <p>Hello,</p>
      <p>Here's the latest from my MetaboliQ OS journey.</p>
      <p>
        I'm building in public through alpha — documenting the data, the experiments,
        and the progress toward Personal Metabolic Memory. Thank you for being on the
        founding list.
      </p>
      <p style="margin-top: 24px;">More soon,<br /><strong>Mru Patel — MetaboliQ OS</strong></p>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="font-size: 12px; color: #888;">
        You're receiving this because you joined the MetaboliQ OS waitlist.
      </p>
    </div>
  `;

  return { subject, text, html };
}
