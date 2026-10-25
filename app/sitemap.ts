import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

// Every public V1 route. Admin and API routes are deliberately left out.
const routes: Array<[path: string, priority: number]> = [
  ["/", 1],
  ["/start", 0.9],
  ["/platform", 0.85],
  ["/platform/how-it-works", 0.8],
  ["/platform/phases", 0.7],
  ["/platform/pillars", 0.7],
  ["/platform/sleep", 0.6],
  ["/platform/stress", 0.6],
  ["/platform/movement", 0.6],
  ["/platform/data-devices", 0.6],
  ["/food-os", 0.85],
  ["/reva", 0.85],
  ["/motivation", 0.6],
  ["/plans", 0.7],
  ["/for-you", 0.8],
  ["/partners", 0.7],
  ["/corporate", 0.7],
  ["/about", 0.75],
  ["/learn", 0.75],
  ["/media-events", 0.6],
  ["/privacy", 0.3],
  ["/terms", 0.3],
  ["/disclaimer", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...routes.map(([path, priority]) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/learn/${a.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
