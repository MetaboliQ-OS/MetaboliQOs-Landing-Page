import { absoluteUrl, siteConfig } from "@/lib/site";

const sameAs = [
  "https://www.youtube.com/@metaboliQOS",
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
      name: "Meet REVA | MetaboliQ OS",
      url,
      description:
        "REVA is designed to connect your available records, goals and daily context, explain relevant patterns and suggest practical next steps.",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: absoluteUrl("/"),
      },
      about: {
        "@type": "SoftwareApplication",
        name: "REVA",
        applicationCategory: "HealthApplication",
        description:
          "Personal AI coach within MetaboliQ OS, with Personal Metabolic Memory.",
      },
      inLanguage: "en-GB",
    },
  ];
}
