export const PHONE = "+919833200228";
export const PHONE_DISPLAY = "98332 00228";
export const WA_LINK = "https://wa.me/919833200228";

export const SITE_URL = "https://frostifyservicecenter.com";
export const SITE_NAME = "Frostify Service Center";

export function whatsappUrl(message = "Hi Frostify Service Center, I need Refrigerator repair service in Mumbai.") {
  return `https://wa.me/${PHONE_DISPLAY}?text=${encodeURIComponent(message)}`;
}

export const pageTitle = "Refrigerator Repair Service in Mumbai | Frostify Service Center";
export const pageDescription =
  "Expert fridge repair at your doorstep in Mumbai. Same-day service for all brands — Samsung, LG, Whirlpool & more. Call now for fast, affordable refrigerator repair.";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      telephone: PHONE,
      description: pageDescription,
      areaServed: "Mumbai, Maharashtra, India",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      priceRange: "₹₹",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: pageTitle,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      datePublished: "2026-06-24",
      dateModified: "2026-06-24",
    },
  ],
};
