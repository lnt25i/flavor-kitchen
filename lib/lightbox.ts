export type LightboxSlide = {
  src: string;
  title?: string;
  description?: string;
  price?: string | null;
};

export function toLightboxSlides(
  items: { src: string; alt?: string; name?: string; price?: string | null }[]
): LightboxSlide[] {
  return items.map((item) => ({
    src: item.src,
    title: item.name,
    description: item.alt,
    price: item.price,
  }));
}
