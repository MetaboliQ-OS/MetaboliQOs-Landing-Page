"use client";

import { m } from "framer-motion";
import { wearableDevices, wearableInputMethods } from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function WearablesSection() {
  return (
    <section
      id="wearables"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#141414" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Wearables OS"
          title="Connect Your Devices — Or Log Manually"
          subtitle="Stop guessing how your day is going. You do not need perfect integrations to start. Use a wearable, CGM, smart scale, BP monitor or sleep tracker if you have one. Upload a screenshot, export a file, or enter the reading manually. Sleep low? Stress high? Glucose spiking? Recovery poor? REVA reads the signal and gives you one clear next action. Full live device connections will come in later phases."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {wearableInputMethods.map((method, i) => (
            <m.div
              key={method.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#0d0d0d] p-4"
            >
              <p className="mb-1 text-sm font-bold text-[#c9a84c]">{method.title}</p>
              <p className="text-xs text-text-secondary">{method.desc}</p>
            </m.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {wearableDevices.map((device, i) => (
            <m.article
              key={device.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="card-hover flex flex-col rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#0d0d0d] p-4"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-text-primary">{device.name}</h3>
                <span className="badge badge-gold shrink-0 text-[0.6rem]">Beta</span>
              </div>
              <p className="mb-3 text-xs text-text-muted">{device.metrics}</p>
              <div className="mb-3 grid grid-cols-3 gap-2">
                {device.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-sm font-bold text-[#c9a84c]">{s.value}</div>
                    <div className="text-[0.6rem] text-text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="mb-3 flex-1 text-[0.65rem] leading-snug text-text-muted">
                Export: {device.export}
              </p>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn-ghost flex-1 justify-center px-2 py-2 text-xs">
                  Upload / Photo
                </button>
                <a href="/reva" className="btn-gold flex-1 justify-center px-2 py-2 text-xs">
                  Ask REVA
                </a>
              </div>
            </m.article>
          ))}
          <article className="card-hover flex flex-col items-center justify-center rounded-2xl border border-dashed border-[rgba(201,168,76,0.25)] bg-[#0d0d0d] p-4 text-center">
            <h3 className="mb-2 text-sm font-bold text-[#c9a84c]">Manual Entry</h3>
            <p className="mb-4 text-xs text-text-secondary">
              Any device · Any reading · Any format
            </p>
            <button type="button" className="btn-gold text-xs">
              Analyse with REVA
            </button>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-[rgba(76,175,125,0.2)] bg-[rgba(76,175,125,0.06)] p-5 text-center">
          <p className="text-sm font-semibold text-[#4CAF7D]">Coming in later phases</p>
          <p className="mt-2 text-sm text-text-secondary">
            Full live device connections — Oura, Whoop, Garmin, Apple Health, Google Fit and more —
            will arrive as the platform matures. Start now with upload, photo or manual entry.
          </p>
          <a href="#waitlist" className="btn-gold mt-4 inline-flex text-sm">
            Join the Private Beta
          </a>
        </div>
      </div>
    </section>
  );
}
