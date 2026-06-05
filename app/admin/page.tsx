"use client";

import { useState } from "react";
import { PRIMARY_INTEREST_OPTIONS } from "@/lib/waitlist";

type WaitlistUser = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  primaryInterest: string | null;
  whatBringsYouHere: string | null;
  isVip: boolean;
  founderNumber: number | null;
  verified: boolean;
  createdAt: string;
};

function interestLabel(value: string | null) {
  if (!value) return "—";
  return PRIMARY_INTEREST_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export default function AdminWaitlistPage() {
  const [secret, setSecret] = useState("");
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [total, setTotal] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [betaCount, setBetaCount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadWaitlist() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/waitlist", {
        headers: { "x-admin-secret": secret },
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message ?? "Failed to load waitlist.");
        return;
      }
      setUsers(data.users ?? []);
      setTotal(data.total ?? 0);
      setVipCount(data.vip ?? 0);
      setBetaCount(data.betaWaitlist ?? 0);
    } catch {
      setError("Network error while loading waitlist.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen w-[92%] max-w-5xl py-12 text-text-primary">
      <h1 className="text-3xl font-semibold">
        Waitlist <span className="gold-text">Admin</span>
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        All applications in one database. VIP tag marks founders for your priority review.
      </p>

      <div className="glass mt-8 space-y-4 rounded-2xl p-6">
        <label className="block text-sm text-text-secondary">Admin secret</label>
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Enter ADMIN_SECRET"
          className="w-full rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0f0f0f] px-4 py-3 outline-none"
        />
        <button
          type="button"
          onClick={loadWaitlist}
          disabled={loading || !secret}
          className="gold-button rounded-xl px-5 py-3 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load applications"}
        </button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

      <div className="glass mt-6 rounded-2xl p-6">
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-secondary">
          <span>Total users: {total}</span>
          <span>VIP founders: {vipCount}</span>
          <span>Beta waitlist: {betaCount}</span>
        </div>
        {users.length === 0 ? (
          <p className="text-sm text-text-secondary">No verified applications loaded yet.</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111111] px-4 py-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">
                    {[user.firstName, user.lastName].filter(Boolean).join(" ") || "—"}
                  </span>
                  <span className="text-sm text-text-secondary">{user.email}</span>
                  <span className="rounded-full bg-[rgba(74,158,232,0.15)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#7eb8f0]">
                    User
                  </span>
                  {user.isVip ? (
                    <span className="rounded-full bg-[rgba(201,168,76,0.15)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#e8c76a]">
                      VIP{user.founderNumber ? ` #${user.founderNumber}` : ""}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[rgba(255,255,255,0.06)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                      Awaiting beta
                    </span>
                  )}
                </div>
                <div className="mt-2 grid gap-1 text-xs text-text-secondary sm:grid-cols-2">
                  <span>Country: {user.country || "—"}</span>
                  <span>Interest: {interestLabel(user.primaryInterest)}</span>
                </div>
                {user.whatBringsYouHere && (
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    {user.whatBringsYouHere}
                  </p>
                )}
                <p className="mt-2 text-xs text-text-muted">
                  {new Date(user.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
