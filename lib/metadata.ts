import type { Metadata } from "next";
import { ogImage, siteUrl } from "./images";

const defaultTitle = "Flavor Kitchen by Chef Raben | Food Truck";
const defaultDescription =
  "Bold Caribbean-inspired street food from Chef Raben. Fresh ingredients, premium plates, and a food truck experience worth seeking out.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | Flavor Kitchen` : defaultTitle;
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
      siteName: "Flavor Kitchen by Chef Raben",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Flavor Kitchen food truck",
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
    "Explore the Flavor Kitchen menu — appetizers, mains, sides, drinks, and desserts crafted by Chef Raben.",
  path: "/menu",
});
export const aboutMetadata = createMetadata({
  title: "About",
  description:
    "Meet Chef Raben and discover the story behind Flavor Kitchen — Caribbean roots, Southern soul, and street food elevated.",
  path: "/about",
});
export const findUsMetadata = createMetadata({
  title: "Find Us",
  description:
    "Weekly schedule, locations, and hours for Flavor Kitchen. Book us for your next event or festival.",
  path: "/find-us",
});
export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Flavor Kitchen for catering, events, press, or general inquiries.",
  path: "/contact",
});
