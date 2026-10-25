import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Poster frames for the founder videos (click-to-play embeds).
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
