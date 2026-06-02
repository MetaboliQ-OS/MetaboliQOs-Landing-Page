# MetaboliQ OS - Production Waitlist App

Premium black-gold Next.js 15 landing application with OTP waitlist verification.

## Tech Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS + Framer Motion
- React Hook Form + Zod
- Prisma + PostgreSQL (Railway)
- Nodemailer (SMTP) for OTP emails
- Render deployment (Railway PostgreSQL)

## Features

- Luxury landing experience (black + gold, glassmorphism, gradients, smooth transitions)
- OTP-only auth flow (no Supabase, no verification links)
- API routes:
  - `POST /api/auth/send-otp`
  - `POST /api/auth/verify-otp`
  - `GET /api/health`
  - `GET /api/admin/waitlist` (protected, lists verified emails)
- OTP policy:
  - 6 digit numeric OTP
  - expires in 10 minutes
  - max 5 requests per hour per email
  - verified users blocked from re-requesting OTP
- Success state:
  - 🎉 You're On The Waitlist

## Project Structure

- `app/`
- `components/`
- `lib/`
- `prisma/`
- `public/`
- `types/`

## Environment Setup

1. Copy env template:

```bash
cp .env.example .env
```

2. Fill these values in `.env`:

- `DATABASE_URL` (Railway PostgreSQL connection string)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `ADMIN_SECRET` (to view waitlist at `/admin`)

## Database (Railway PostgreSQL)

1. Create PostgreSQL database in Railway.
2. Paste Railway connection string into `DATABASE_URL`.
3. Run migration and generate Prisma client:

```bash
npx prisma migrate dev --name init_waitlist
npx prisma generate
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Contracts

### `POST /api/auth/send-otp`

Request:

```json
{ "email": "user@example.com" }
```

Response:

```json
{ "success": true, "message": "OTP sent to your email." }
```

### `POST /api/auth/verify-otp`

Request:

```json
{ "email": "user@example.com", "otp": "123456" }
```

Response:

```json
{
  "success": true,
  "message": "Email verified successfully.",
  "verified": true
}
```

### `GET /api/health`

Response:

```json
{
  "status": "ok",
  "service": "metaboliq-os",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

## Deploy to Render

### Option A — Blueprint (`render.yaml`)

1. Push this repo to GitHub.
2. In [Render Dashboard](https://dashboard.render.com/) → **New** → **Blueprint**.
3. Connect the repo (Render reads `render.yaml`).
4. Set secret env vars when prompted:
   - `DATABASE_URL` (Railway PostgreSQL URL)
   - `ADMIN_SECRET`
   - `SMTP_*` (optional until email is enabled)
5. Deploy.

### Option B — Manual Web Service

1. **New** → **Web Service** → connect GitHub repo.
2. Settings:
   - **Runtime:** Node
   - **Build Command:**
     ```bash
     npm install && npx prisma migrate deploy && npm run build
     ```
   - **Start Command:**
     ```bash
     npm start
     ```
   - **Health Check Path:** `/api/health`
3. **Environment** — add all variables from `.env.example`.
4. Click **Create Web Service**.

### Railway + Render notes

- Keep PostgreSQL on **Railway**.
- Use Railway **public** `DATABASE_URL` in Render (starts with `postgresql://`).
- Migrations run automatically during Render build (`prisma migrate deploy`).

### Verify after deploy

```bash
curl https://YOUR-SERVICE.onrender.com/api/health
```

## View Waitlist Emails

1. Open [http://localhost:3000/admin](http://localhost:3000/admin)
2. Enter your `ADMIN_SECRET`
3. Click **Load verified emails**

Or call API:

```bash
curl -H "x-admin-secret: YOUR_SECRET" http://localhost:3000/api/admin/waitlist
```

## OTP Email Template

Subject:

`Verify Your MetaboliQ OS Access`

Body:

```text
Hello,

Your verification code is:

{{OTP}}

This code expires in 10 minutes.

MetaboliQ OS Team
```

## Notes

- For exact pixel-identical replication, add your source reference HTML/CSS/assets into this repo so styles can be matched 1:1.
