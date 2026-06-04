import type { Viewport } from "next";
import { siteConfig } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};
