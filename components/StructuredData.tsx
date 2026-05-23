import { contact, site } from "@/lib/data";
import { siteUrl } from "@/lib/images";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.name,
    description:
      "Chef Raben's food truck in West Palm Beach, FL. Bold Flavor. Made Fresh. Ten-item truck menu.",
    url: siteUrl,
    email: contact.email,
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
