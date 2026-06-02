"use client";

import { useState } from "react";

type WaitlistUser = {
  id: string;
  email: string;
  verified: boolean;
  createdAt: string;
};

export default function AdminWaitlistPage() {
  const [secret, setSecret] = useState("");
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [total, setTotal] = useState(0);
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
    } catch {
      setError("Network error while loading waitlist.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen w-[92%] max-w-4xl py-12 text-[#f5f0e8]">
      <h1 className="text-3xl font-semibold">
        Waitlist <span className="gold-text">Admin</span>
      </h1>
      <p className="mt-2 text-sm text-[#c8bfa8]">
        View verified emails stored in PostgreSQL.
      </p>

      <div className="glass mt-8 space-y-4 rounded-2xl p-6">
        <label className="block text-sm text-[#c8bfa8]">Admin secret</label>
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
          {loading ? "Loading..." : "Load verified emails"}
        </button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

      <div className="glass mt-6 rounded-2xl p-6">
        <p className="mb-4 text-sm text-[#c8bfa8]">Total verified: {total}</p>
        {users.length === 0 ? (
          <p className="text-sm text-[#c8bfa8]">No verified emails loaded yet.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex flex-col justify-between gap-1 rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111111] px-4 py-3 md:flex-row md:items-center"
              >
                <span>{user.email}</span>
                <span className="text-xs text-[#c8bfa8]">
                  {new Date(user.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
