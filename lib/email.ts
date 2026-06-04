import { Resend } from "resend";
import { getEnv, isEmailConfigured } from "@/lib/env";

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
