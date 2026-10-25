import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  /** Set false for admin or draft routes */
  index?: boolean;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  index = true,
  ogImageAlt,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const siteUrl = getSiteUrl();
  // /reva has its own colocated opengraph-image file; inside a route group its
  // URL is generated, so let the file convention supply it there.
  const ownImage = path === "/reva";
  const imagePath = "/opengraph-image";

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    authors: [{ name: siteConfig.creator, url: "https://linkedin.com/in/mrupatel" }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      ...(ownImage
        ? {}
        : {
            images: [
              {
                url: imagePath,
                width: 1200,
                height: 630,
                alt: ogImageAlt ?? `${siteConfig.name} — ${siteConfig.tagline}`,
              },
            ],
          }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ownImage ? {} : { images: [imagePath] }),
    },
    category: "health",
  };
}

export const rootMetadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  }),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/images/metaboliq-icon.png", type: "image/png" }],
    apple: [{ url: "/images/metaboliq-icon.png", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "black-translucent",
  },
};
