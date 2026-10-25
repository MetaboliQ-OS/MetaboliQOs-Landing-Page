"use client";

import { useState } from "react";
import { formatPrimaryInterests } from "@/lib/waitlist";

type Enquiry = {
  id: string;
  type: "partner" | "corporate";
  name: string;
  workEmail: string;
  organisation: string;
  role: string | null;
  country: string;
  interest: string;
  population: string | null;
  message: string | null;
  marketingOptIn: boolean;
  createdAt: string;
};

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

export default function AdminWaitlistPage() {
  const [secret, setSecret] = useState("");
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [total, setTotal] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [betaCount, setBetaCount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [enquiryError, setEnquiryError] = useState("");

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
      await loadEnquiries();
    } catch {
      setError("Network error while loading waitlist.");
    } finally {
      setLoading(false);
    }
  }

  async function loadEnquiries() {
    setEnquiryError("");
    try {
      const response = await fetch("/api/admin/enquiries", { headers: { "x-admin-secret": secret } });
      const data = await response.json();
      if (!response.ok) {
        setEnquiryError(data.message ?? "Failed to load enquiries.");
        return;
      }
      setEnquiries(data.enquiries ?? []);
    } catch {
      setEnquiryError("Network error while loading enquiries.");
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
          className="w-full rounded-xl border border-[var(--line-strong)] bg-[var(--background)] px-4 py-3 outline-none"
        />
        <button
          type="button"
          onClick={loadWaitlist}
          disabled={loading || !secret}
          className="gold-button rounded-xl px-5 py-3 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load applications"}
        </button>
        {error && <p className="text-sm text-[var(--red)]">{error}</p>}
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
                className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-4 py-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">
                    {[user.firstName, user.lastName].filter(Boolean).join(" ") || "—"}
                  </span>
                  <span className="text-sm text-text-secondary">{user.email}</span>
                  <span className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--blue)]">
                    User
                  </span>
                  {user.isVip ? (
                    <span className="rounded-full bg-[var(--gold-wash)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--gold-ink)]">
                      VIP{user.founderNumber ? ` #${user.founderNumber}` : ""}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                      Awaiting beta
                    </span>
                  )}
                </div>
                <div className="mt-2 grid gap-1 text-xs text-text-secondary sm:grid-cols-2">
                  <span>Country: {user.country || "—"}</span>
                  <span>Interests: {formatPrimaryInterests(user.primaryInterest)}</span>
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

      <div className="glass mt-6 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Partner &amp; corporate enquiries</h2>
        <div className="mb-4 mt-2 flex flex-wrap gap-4 text-sm text-text-secondary">
          <span>Partners: {enquiries.filter((e) => e.type === "partner").length}</span>
          <span>Corporate: {enquiries.filter((e) => e.type === "corporate").length}</span>
        </div>
        {enquiryError && <p className="mb-3 text-sm text-[var(--red)]">{enquiryError}</p>}
        {enquiries.length === 0 ? (
          <p className="text-sm text-text-secondary">No enquiries loaded yet.</p>
        ) : (
          <ul className="space-y-3">
            {enquiries.map((e) => (
              <li key={e.id} className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-4 py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{e.name}</span>
                  <a href={`mailto:${e.workEmail}`} className="text-sm text-text-secondary hover:underline">
                    {e.workEmail}
                  </a>
                  <span className="rounded-full bg-[var(--gold-wash)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--gold-ink)]">
                    {e.type}
                  </span>
                  {e.marketingOptIn ? (
                    <span className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                      Updates opt-in
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 grid gap-1 text-xs text-text-secondary sm:grid-cols-2">
                  <span>Organisation: {e.organisation}</span>
                  <span>Country: {e.country}</span>
                  {e.role ? <span>Role: {e.role}</span> : null}
                  {e.population ? <span>Population: {e.population}</span> : null}
                  <span className="sm:col-span-2">Interest: {e.interest}</span>
                </div>
                {e.message && <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-text-muted">{e.message}</p>}
                <p className="mt-2 text-xs text-text-muted">{new Date(e.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
