import { absoluteUrl, siteConfig } from "@/lib/site";

const sameAs = [
  "https://youtube.com/@mrupatel",
  "https://linkedin.com/in/mrupatel",
  "https://instagram.com/mrupatel",
  "https://facebook.com/MruPatelEntrepreneur",
  "https://tiktok.com/@mrupatel",
];

export function homePageJsonLd() {
  const url = absoluteUrl("/");

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url,
      description: siteConfig.defaultDescription,
      inLanguage: "en-GB",
      publisher: {
        "@type": "Person",
        name: siteConfig.creator,
        sameAs,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url,
      description: siteConfig.defaultDescription,
      founder: {
        "@type": "Person",
        name: siteConfig.creator,
        sameAs,
      },
      sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url,
      description: siteConfig.defaultDescription,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
        availability: "https://schema.org/PreOrder",
        description: "Private alpha waitlist",
      },
      author: {
        "@type": "Person",
        name: siteConfig.creator,
      },
    },
  ];
}

export function revaPageJsonLd() {
  const url = absoluteUrl("/reva");

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "REVA AI | MetaboliQ OS",
      url,
      description:
        "REVA — Revamp, Execute, Vitality, Advisor. Personal metabolic intelligence for meals, CGM, wearables, blood markers and MRRRU phase guidance.",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: absoluteUrl("/"),
      },
      about: {
        "@type": "SoftwareApplication",
        name: "REVA AI",
        applicationCategory: "HealthApplication",
        description:
          "AI metabolic advisor integrated with Food OS, CGM, wearables and Personal Metabolic Memory.",
      },
      inLanguage: "en-GB",
    },
  ];
}
