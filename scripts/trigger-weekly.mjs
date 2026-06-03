// Triggers the weekly waitlist update email.
// Run by a Railway Cron service on a weekly schedule.
// Requires env: APP_URL (deployed site origin) and CRON_SECRET (matches the app's).

const appUrl = process.env.APP_URL;
const secret = process.env.CRON_SECRET;

if (!appUrl || !secret) {
  console.error("[weekly-cron] Missing APP_URL or CRON_SECRET");
  process.exit(1);
}

const endpoint = `${appUrl.replace(/\/$/, "")}/api/cron/weekly`;

try {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "x-cron-secret": secret },
  });
  const body = await res.text();
  console.log(`[weekly-cron] ${res.status} ${body}`);
  if (!res.ok) process.exit(1);
} catch (error) {
  console.error("[weekly-cron] request failed:", error);
  process.exit(1);
}
