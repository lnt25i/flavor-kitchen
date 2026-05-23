import { truckMenu, type TruckMenuItem } from "./data";
import type { LightboxSlide } from "./lightbox";
import { menuItemCaption } from "./menu";

export type MenuPhotoVariant = "light" | "dark";

export type MenuPhotoEntry = {
  src: string;
  variant: MenuPhotoVariant;
  item: TruckMenuItem;
};

/** All 20 owner food photos (light + dark per menu item). */
export function getAllMenuPhotos(): MenuPhotoEntry[] {
  return truckMenu.flatMap((item) => [
    { src: item.photos.light, variant: "light" as const, item },
    { src: item.photos.dark, variant: "dark" as const, item },
  ]);
}

export function getAllMenuLightboxSlides(): LightboxSlide[] {
  return getAllMenuPhotos().map((photo) => ({
    src: photo.src,
    title: photo.item.name,
    description: menuItemCaption(photo.item),
    price: photo.item.price,
  }));
}

export function findLightboxIndex(src: string): number {
  const photos = getAllMenuPhotos();
  const idx = photos.findIndex((p) => p.src === src);
  return idx >= 0 ? idx : 0;
}
