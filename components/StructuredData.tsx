import { contact, site } from "@/lib/data";
import { siteUrl } from "@/lib/images";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.name,
    description:
      "Chef-led food truck in Palm Beach County, Florida. Five cuisines — Haitian, American, Greek, French, and Caribbean — one unforgettable menu.",
    url: siteUrl,
    email: contact.email,
    servesCuisine: [
      "Haitian",
      "American",
      "Greek",
      "French",
      "Caribbean",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palm Beach County",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Palm Beach County, Florida",
    },
    sameAs: [
      contact.social.instagram,
      contact.social.facebook,
      contact.social.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
