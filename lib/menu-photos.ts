import { truckMenu, type TruckMenuItem } from "./data";
import type { LightboxSlide } from "./lightbox";
import { menuItemCaption } from "./menu";

export type MenuPhotoVariant = "light" | "dark";

export type GalleryPhotoVariant = MenuPhotoVariant | "classic";

export type MenuPhotoEntry = {
  src: string;
  variant: MenuPhotoVariant;
  item: TruckMenuItem;
};

export type GalleryPhotoEntry = {
  src: string;
  variant: GalleryPhotoVariant;
  item: TruckMenuItem;
  label: string;
};

/** Maps menu item numbers to files in /public/images/gallery/ */
const GALLERY_FOLDER_FILES: Record<number, string> = {
  1: "/images/gallery/01-chicken-gyro.png",
  2: "/images/gallery/02-green-chicken-wrap.png",
  3: "/images/gallery/03-philly-cheesesteak.png",
  4: "/images/gallery/04-chicken-sandwich.png",
  5: "/images/gallery/05-raben-classic-burger.png",
  6: "/images/gallery/06-hamburger.png",
  7: "/images/gallery/07-chicken-tacos.png",
  8: "/images/gallery/08-fish-tacos.png",
  9: "/images/gallery/09-steak-tacos.png",
  10: "/images/gallery/10-quesadilla.png",
};

/** All 20 owner food photos (light + dark per menu item). */
export function getAllMenuPhotos(): MenuPhotoEntry[] {
  return truckMenu.flatMap((item) => [
    { src: item.photos.light, variant: "light" as const, item },
    { src: item.photos.dark, variant: "dark" as const, item },
  ]);
}

/** Ten standalone photos from /public/images/gallery/. */
export function getGalleryFolderPhotos(): GalleryPhotoEntry[] {
  return truckMenu.map((item) => ({
    src: GALLERY_FOLDER_FILES[item.number],
    variant: "classic" as const,
    item,
    label: item.name,
  }));
}

/** All 30 website food photos: gallery folder + menu light/dark variants. */
export function getAllGalleryPhotos(): GalleryPhotoEntry[] {
  return truckMenu.flatMap((item) => [
    {
      src: GALLERY_FOLDER_FILES[item.number],
      variant: "classic" as const,
      item,
      label: item.name,
    },
    {
      src: item.photos.light,
      variant: "light" as const,
      item,
      label: `${item.name} — Light`,
    },
    {
      src: item.photos.dark,
      variant: "dark" as const,
      item,
      label: `${item.name} — Dark`,
    },
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

export function getAllGalleryLightboxSlides(): LightboxSlide[] {
  return getAllGalleryPhotos().map((photo) => ({
    src: photo.src,
    title: photo.label,
    description: menuItemCaption(photo.item),
    price: photo.item.price,
  }));
}

export function findGalleryLightboxIndex(src: string): number {
  const photos = getAllGalleryPhotos();
  const idx = photos.findIndex((p) => p.src === src);
  return idx >= 0 ? idx : 0;
}

export function findLightboxIndex(src: string): number {
  const photos = getAllMenuPhotos();
  const idx = photos.findIndex((p) => p.src === src);
  return idx >= 0 ? idx : 0;
}

export const GALLERY_PHOTO_COUNT = getAllGalleryPhotos().length;
export const GALLERY_FOLDER_PHOTO_COUNT = getGalleryFolderPhotos().length;
