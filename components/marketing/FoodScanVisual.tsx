"use client";

import Image from "next/image";

export function FoodScanVisual() {
  return (
    <div className="relative mb-4 overflow-hidden rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0a0a0a]">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/food-scan-demo.png"
          alt="FoodOS scan — phone camera analysing a meal with AI nutrient breakdown"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
