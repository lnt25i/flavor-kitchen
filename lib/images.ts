import { getAllGalleryPhotos } from "./menu-photos";

export const images = {
  hero: {
    left: {
      src: "/images/hero/RaBen_left_side.png",
      alt: "Flavor Kitchen food truck — Chef Raben branding, Bold Flavor. Made Fresh., Palm Beach Florida",
    },
    right: {
      src: "/images/hero/RaBen_right_side.png",
      alt: "Flavor Kitchen food truck — service window and ten-item menu on the wrap",
    },
  },
  chef: {
    portrait: {
      src: "/images/hero/RaBen_left_side.png",
      alt: "Flavor Kitchen by Chef Raben food truck",
    },
    truck: {
      src: "/images/hero/RaBen_right_side.png",
      alt: "Flavor Kitchen truck — full menu on the wrap",
    },
  },
  gallery: getAllGalleryPhotos().map((photo) => ({
    src: photo.src,
    alt: photo.item.name,
    name: photo.item.name,
    variant: photo.variant,
  })),
} as const;

export const siteUrl = "https://flavorkitchen.us";
export const ogImage = `${siteUrl}/images/hero/RaBen_left_side.png`;
