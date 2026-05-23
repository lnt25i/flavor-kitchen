import type { Metadata } from "next";
import { site } from "./data";
import { ogImage, siteUrl } from "./images";

const defaultDescription =
  "Flavor Kitchen by Chef Raben — West Palm Beach, FL food truck. Bold Flavor. Made Fresh. Ten items on the truck: gyros, wraps, cheesesteak, sandwiches, burgers, tacos, quesadilla.";

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
    "The ten items on the Flavor Kitchen truck — Chicken Gyro through Quesadilla. Photos and descriptions from Chef Raben’s menu graphics.",
  path: "/menu",
});
export const aboutMetadata = createMetadata({
  title: "About",
  description:
    "Flavor Kitchen is Chef Raben’s mobile food truck serving Palm Beach County. Bold Flavor. Made Fresh.",
  path: "/about",
});
export const findUsMetadata = createMetadata({
  title: "Find Us",
  description:
    "Find the Flavor Kitchen food truck — follow @RaBenFlavorKitchen for daily stops across Palm Beach County.",
  path: "/find-us",
});
export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Contact Flavor Kitchen to book the food truck. info@flavorkitchen.us · @RaBenFlavorKitchen",
  path: "/contact",
});
