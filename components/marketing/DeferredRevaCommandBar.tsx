"use client";

import dynamic from "next/dynamic";

const RevaCommandBar = dynamic(
  () => import("./RevaCommandBar").then((mod) => mod.RevaCommandBar),
  { ssr: false },
);

export function DeferredRevaCommandBar() {
  return <RevaCommandBar />;
}
