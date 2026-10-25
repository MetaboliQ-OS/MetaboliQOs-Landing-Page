"use client";

import { useEffect } from "react";

/**
 * The old site was one long page, so links like /#phases or /#waitlist are out
 * in the wild. Hash fragments never reach the server, so they are mapped here
 * to each subject's new home (Live V1 §2: "Preserve useful old anchor links").
 */
const LEGACY_ANCHORS: Record<string, string> = {
  "my-story": "/about#founder-journey",
  "founder-quote": "/about#founder-journey",
  mrrru: "/platform#mrrru",
  "demo-platform": "/platform",
  phases: "/platform/phases",
  pillars: "/platform/pillars",
  "food-os": "/food-os",
  cgm: "/platform/data-devices",
  blood: "/platform/data-devices",
  wearables: "/platform/data-devices",
  myths: "/learn",
  waitlist: "/for-you#beta",
  founding: "/for-you#founding", // the beta form preselects founding membership on this hash
  alpha: "/for-you#beta",
};

export function LegacyHashRedirect() {
  useEffect(() => {
    const target = LEGACY_ANCHORS[window.location.hash.slice(1)];
    if (target) window.location.replace(target);
  }, []);
  return null;
}
