import { Resend } from "resend";
import { getEnv, isEmailConfigured } from "@/lib/env";
import { absoluteUrl } from "@/lib/site";

const WEEKLY_EMAIL_COOLDOWN_DAYS = 7;

function getResendClient() {
  if (!isEmailConfigured()) {
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const { RESEND_API_KEY } = getEnv();
  return new Resend(RESEND_API_KEY);
}

/**
 * Single place that actually delivers mail. Callers (OTP, weekly update, etc.)
 * stay unchanged when the provider changes.
 */
async function sendEmail(opts: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const resend = getResendClient();
  const { RESEND_FROM } = getEnv();

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });

  if (error) {
    throw new Error(error.message);
  }
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

/** True when a user should receive the cron weekly blast (not right after welcome). */
export function isEligibleForWeeklyEmail(welcomeEmailSentAt: Date | null): boolean {
  if (!welcomeEmailSentAt) return true;
  const cooldownMs = WEEKLY_EMAIL_COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  return Date.now() - welcomeEmailSentAt.getTime() >= cooldownMs;
}

/**
 * Sent once when someone verifies and joins the founding waitlist.
 */
export async function sendWelcomeEmail(to: string) {
  const { subject, text, html } = welcomeEmailContent();
  await sendEmail({ to, subject, text, html });
}

function welcomeEmailContent() {
  const siteUrl = absoluteUrl("/");
  const revaUrl = absoluteUrl("/reva");

  const subject = "Welcome to MetaboliQ OS — You're on the founding list";

  const text = `Hello,

You're in. Thank you for verifying and joining the MetaboliQ OS founding waitlist.

From now on, you will be receiving emails from me — including weekly updates on the journey, the data, and what's being built in alpha.

What to expect:
- Weekly update emails with real progress, experiments, and platform news
- Occasional emails when something important ships or alpha access opens
- You're on the founding list for private alpha as modules go live

Explore what we're building: ${siteUrl}
REVA AI overview: ${revaUrl}

I'm building this in public from my own metabolic transformation — documented daily, no shortcuts.

Glad you're here,
Mru Patel — MetaboliQ OS

You're receiving this because you verified your email on the MetaboliQ OS waitlist.`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #c9a84c; margin-bottom: 4px;">Welcome to MetaboliQ OS</h2>
      <p>Hello,</p>
      <p>
        <strong>You're in.</strong> Thank you for verifying and joining the founding waitlist.
      </p>
      <p style="margin: 20px 0; padding: 16px 18px; background: #f7f3e8; border-left: 4px solid #c9a84c; line-height: 1.6;">
        <strong>From now on, you will be receiving emails from me</strong> — including
        <strong> weekly updates</strong> on the journey, the data, and what's being built in alpha.
      </p>
      <p style="margin: 16px 0 8px; font-weight: bold;">What to expect</p>
      <ul style="padding-left: 20px; line-height: 1.6;">
        <li><strong>Weekly update emails</strong> — real progress, experiments, and platform news</li>
        <li>Occasional emails when something important ships or alpha access opens</li>
        <li>You're on the founding list for private alpha as modules go live</li>
      </ul>
      <p style="margin: 24px 0;">
        <a href="${siteUrl}" style="display: inline-block; padding: 12px 20px; background: #c9a84c; color: #080808; text-decoration: none; font-weight: bold; border-radius: 6px;">Visit MetaboliQ OS</a>
      </p>
      <p style="font-size: 14px;">
        <a href="${revaUrl}" style="color: #4a9ee8;">Learn about REVA AI →</a>
      </p>
      <p>
        I'm building this in public from my own metabolic transformation — documented daily,
        no shortcuts.
      </p>
      <p style="margin-top: 24px;">Glad you're here,<br /><strong>Mru Patel — MetaboliQ OS</strong></p>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="font-size: 12px; color: #888;">
        You're receiving this because you verified your email on the MetaboliQ OS waitlist.
      </p>
    </div>
  `;

  return { subject, text, html };
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
