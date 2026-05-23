export type LightboxSlide = {
  src: string;
  title?: string;
  description?: string;
};

export function toLightboxSlides(
  items: { src: string; alt?: string; name?: string }[]
): LightboxSlide[] {
  return items.map((item) => ({
    src: item.src,
    title: item.name,
    description: item.alt,
  }));
}
