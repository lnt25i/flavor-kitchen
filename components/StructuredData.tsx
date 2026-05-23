import { contact, site } from "@/lib/data";
import { siteUrl } from "@/lib/images";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.name,
    description:
      "Chef Raben's food truck in West Palm Beach, FL. Bold Flavor. Made Fresh. Gyros, wraps, burgers, tacos, and quesadillas.",
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
      addressLocality: "West Palm Beach",
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
