import type { Metadata } from "next";
import { site } from "./data";
import { ogImage, siteUrl } from "./images";

const defaultDescription =
  "Chef Raben's food truck in Palm Beach County, Florida. Haitian roots meet American, Greek, French, and Caribbean flavors — tacos, burgers, and chef specials.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | Flavor Kitchen by Chef Raben`
    : `${site.name} | Food Truck`;
  const url = `${siteUrl}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Flavor Kitchen by Chef Raben food truck",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

export const homeMetadata = createMetadata({});
export const menuMetadata = createMetadata({
  title: "Menu",
  description:
    "Tacos, burgers, sides, drinks, desserts, and chef specials — five cultures on one menu from Flavor Kitchen in Palm Beach County.",
  path: "/menu",
});
export const aboutMetadata = createMetadata({
  title: "About",
  description:
    "Born in Haiti, trained by the world. Meet Chef Raben and discover the five-cuisine vision behind Flavor Kitchen.",
  path: "/about",
});
export const findUsMetadata = createMetadata({
  title: "Find Us",
  description:
    "Weekly schedule and locations across Palm Beach County, Florida. Book Flavor Kitchen for your next event.",
  path: "/find-us",
});
export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Contact Flavor Kitchen for catering, events, and press. info@flavorkitchen.us · @Rabenflavorkitchen",
  path: "/contact",
});
