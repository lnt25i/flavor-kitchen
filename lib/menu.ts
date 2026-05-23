import type { TruckMenuItem } from "./data";

export function menuItemCaption(item: TruckMenuItem): string {
  if (item.description && item.price) {
    return `${item.description} — ${item.price}`;
  }
  if (item.description) return item.description;
  if (item.price) return item.price;
  return item.name;
}

export function hasMenuPrice(item: TruckMenuItem): boolean {
  return Boolean(item.price?.trim());
}
