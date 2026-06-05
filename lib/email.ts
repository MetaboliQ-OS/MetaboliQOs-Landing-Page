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
 * Sent once when someone verifies and joins the waitlist.
 */
export async function sendWelcomeEmail(to: string, isVip: boolean) {
  const { subject, text, html } = welcomeEmailContent(isVip);
  await sendEmail({ to, subject, text, html });
}

function welcomeEmailContent(isVip: boolean) {
  const siteUrl = absoluteUrl("/");
  const revaUrl = absoluteUrl("/reva");

  if (isVip) {
    return vipFounderWelcomeContent(siteUrl, revaUrl);
  }

  return betaWelcomeContent(siteUrl, revaUrl);
}

function vipFounderWelcomeContent(siteUrl: string, revaUrl: string) {
  const subject = "Welcome to MetaboliQ OS";

  const text = `Welcome to MetaboliQ OS

Hello,

You're in.

Thank you for your support and joining the MetaboliQ OS VIP Founding Member waitlist.

This is not just another health app launch list. You are now part of the early community helping shape a platform being built from real metabolic transformation, real data, daily testing, and the belief that people need better tools to understand what is actually happening inside their body.

Over the coming weeks, I'll be sharing the journey openly — what I'm testing, what I'm learning, what we're building, what is working, what still needs improving, and how MetaboliQ OS powered by MRRRU is developing into a personal metabolic command system.

You'll receive:

- Weekly founder updates on the platform, my own data-led health journey, experiments, lessons and build progress.

- Early access opportunities as beta modules begin opening, including Food OS, REVA AI, meal sequencing, metabolic memory, movement, sleep, stress, blood marker and CGM-related features.

- Founder-only feedback requests where I'll ask for your input on features, wording, design, user journey, content, videos, reports and what would genuinely help you or someone you care about.

- Beta testing invitations for the app as we start releasing early versions. Your feedback will help improve the product before wider launch.

- Behind-the-scenes content including short videos, explainers, experiments, founder notes and early platform previews.

I'm building this in public because I believe health should be measured, understood and rebuilt intelligently, not guessed.

My own journey started with serious metabolic warning signs and became a daily experiment in food, timing, walking, sleep, stress, blood markers, CGM data and behaviour change. MetaboliQ OS is being built from that lived experience, but the goal is much bigger: to help people make better daily metabolic decisions before things become bigger problems.

As a VIP Founding Member, I'd love your involvement.

When I share updates, please reply with honest feedback. Tell me what is clear, what is confusing, what feels valuable, what feels missing, and what you would want the app, videos or reports to do for you.

This early community can help shape the product properly.

Visit MetaboliQ OS: ${siteUrl}
Learn about REVA AI: ${revaUrl}

Happy, proud and glad you're here. Welcome.

Mru Patel
Founder, MetaboliQ OS powered by MRRRU`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.65;">
      <h2 style="color: #c9a84c; margin-bottom: 8px; font-size: 26px;">Welcome to MetaboliQ OS</h2>
      <p>Hello,</p>
      <p><strong>You're in.</strong></p>
      <p>
        Thank you for your support and joining the MetaboliQ OS
        <strong>VIP Founding Member waitlist</strong>.
      </p>
      <p>
        This is not just another health app launch list. You are now part of the early community
        helping shape a platform being built from real metabolic transformation, real data, daily
        testing, and the belief that people need better tools to understand what is actually
        happening inside their body.
      </p>
      <p>
        Over the coming weeks, I'll be sharing the journey openly — what I'm testing, what I'm
        learning, what we're building, what is working, what still needs improving, and how
        MetaboliQ OS powered by MRRRU is developing into a personal metabolic command system.
      </p>
      <p style="margin: 20px 0 10px; font-weight: bold;">You'll receive:</p>
      <ul style="padding-left: 20px; margin: 0 0 20px;">
        <li style="margin-bottom: 10px;">
          <strong>Weekly founder updates</strong> on the platform, my own data-led health journey,
          experiments, lessons and build progress.
        </li>
        <li style="margin-bottom: 10px;">
          <strong>Early access opportunities</strong> as beta modules begin opening, including
          Food OS, REVA AI, meal sequencing, metabolic memory, movement, sleep, stress, blood
          marker and CGM-related features.
        </li>
        <li style="margin-bottom: 10px;">
          <strong>Founder-only feedback requests</strong> where I'll ask for your input on features,
          wording, design, user journey, content, videos, reports and what would genuinely help you
          or someone you care about.
        </li>
        <li style="margin-bottom: 10px;">
          <strong>Beta testing invitations</strong> for the app as we start releasing early versions.
          Your feedback will help improve the product before wider launch.
        </li>
        <li style="margin-bottom: 10px;">
          <strong>Behind-the-scenes content</strong> including short videos, explainers,
          experiments, founder notes and early platform previews.
        </li>
      </ul>
      <p>
        I'm building this in public because I believe health should be measured, understood and
        rebuilt intelligently, not guessed.
      </p>
      <p>
        My own journey started with serious metabolic warning signs and became a daily experiment
        in food, timing, walking, sleep, stress, blood markers, CGM data and behaviour change.
        MetaboliQ OS is being built from that lived experience, but the goal is much bigger: to
        help people make better daily metabolic decisions before things become bigger problems.
      </p>
      <p style="margin: 20px 0; padding: 16px 18px; background: #f7f3e8; border-left: 4px solid #c9a84c;">
        <strong>As a VIP Founding Member, I'd love your involvement.</strong><br /><br />
        When I share updates, please reply with honest feedback. Tell me what is clear, what is
        confusing, what feels valuable, what feels missing, and what you would want the app, videos
        or reports to do for you.<br /><br />
        This early community can help shape the product properly.
      </p>
      <p style="margin: 24px 0;">
        <a href="${siteUrl}" style="display: inline-block; padding: 12px 20px; background: #c9a84c; color: #080808; text-decoration: none; font-weight: bold; border-radius: 6px;">Visit MetaboliQ OS</a>
      </p>
      <p style="font-size: 14px; margin-bottom: 24px;">
        <a href="${revaUrl}" style="color: #4a9ee8;">Learn about REVA AI →</a>
      </p>
      <p>Happy, proud and glad you're here. Welcome.</p>
      <p style="margin-top: 24px;">
        <strong>Mru Patel</strong><br />
        Founder, MetaboliQ OS powered by MRRRU
      </p>
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="font-size: 12px; color: #888;">
        You're receiving this because you verified your email on the MetaboliQ OS waitlist.
      </p>
    </div>
  `;

  return { subject, text, html };
}

function betaWelcomeContent(siteUrl: string, revaUrl: string) {
  const subject = "Welcome to MetaboliQ OS";

  const text = `Welcome to MetaboliQ OS

Hello,

You're in.

Thank you for joining the MetaboliQ OS beta waitlist.

You'll receive updates as beta access opens and modules begin rolling out — including Food OS, REVA AI, metabolic memory, movement, sleep, stress, blood markers and CGM-related features.

Visit MetaboliQ OS: ${siteUrl}
Learn about REVA AI: ${revaUrl}

Glad you're here.

Mru Patel
Founder, MetaboliQ OS powered by MRRRU`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; line-height: 1.65;">
      <h2 style="color: #c9a84c; margin-bottom: 8px; font-size: 26px;">Welcome to MetaboliQ OS</h2>
      <p>Hello,</p>
      <p><strong>You're in.</strong></p>
      <p>Thank you for joining the MetaboliQ OS beta waitlist.</p>
      <p>
        You'll receive updates as beta access opens and modules begin rolling out — including
        Food OS, REVA AI, metabolic memory, movement, sleep, stress, blood markers and
        CGM-related features.
      </p>
      <p style="margin: 24px 0;">
        <a href="${siteUrl}" style="display: inline-block; padding: 12px 20px; background: #c9a84c; color: #080808; text-decoration: none; font-weight: bold; border-radius: 6px;">Visit MetaboliQ OS</a>
      </p>
      <p style="font-size: 14px; margin-bottom: 24px;">
        <a href="${revaUrl}" style="color: #4a9ee8;">Learn about REVA AI →</a>
      </p>
      <p>Glad you're here.</p>
      <p style="margin-top: 24px;">
        <strong>Mru Patel</strong><br />
        Founder, MetaboliQ OS powered by MRRRU
      </p>
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
