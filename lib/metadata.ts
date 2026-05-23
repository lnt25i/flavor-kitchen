import type { Metadata } from "next";
import { site } from "./data";
import { ogImage, siteUrl } from "./images";

const defaultDescription =
  "Flavor Kitchen by Chef Raben — West Palm Beach, FL. Bold Flavor. Made Fresh. The real truck menu: gyros, wraps, burgers, tacos, and more.";

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
    "Meet Chef Raben and the Flavor Kitchen food truck — mobile street food with five-culture fusion across Palm Beach County.",
  path: "/about",
});
export const findUsMetadata = createMetadata({
  title: "Find Us",
  description:
    "Mobile food truck schedule — rotating Palm Beach County stops. Follow @RaBenFlavorKitchen for today’s location. Book the truck for events.",
  path: "/find-us",
});
export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Contact Flavor Kitchen for catering, events, and press. info@flavorkitchen.us · @RaBenFlavorKitchen",
  path: "/contact",
});
