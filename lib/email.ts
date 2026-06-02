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
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
}

export async function sendOtpEmail(to: string, otp: string) {
  const transporter = getTransporter();
  const env = getEnv();

  await transporter.sendMail({
    from: env.SMTP_FROM,
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
