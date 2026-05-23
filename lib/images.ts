export const images = {
  hero: {
    left: {
      src: "/images/hero/RaBen_left_side.png",
      alt: "Flavor Kitchen food truck left side — sunset palm tree wrap, Chef RaBen branding",
    },
    right: {
      src: "/images/hero/RaBen_right_side.png",
      alt: "Flavor Kitchen food truck right side — service window and full menu",
    },
  },
  /** Home menu showcase — Unsplash placeholders until replaced in /public/images/menu/ */
  menuShowcase: {
    gyro: {
      // REPLACE WITH REAL PHOTO: Chicken Gyro
      src: "https://images.unsplash.com/photo-1529006556770-366edd9c4ba9?w=800&q=80",
      alt: "Chicken gyro with grilled chicken and fresh vegetables",
    },
    wrap: {
      // REPLACE WITH REAL PHOTO: Green Chicken Wrap
      src: "https://images.unsplash.com/photo-1626700051175-6818013e1cf4?w=800&q=80",
      alt: "Green chicken wrap with fresh vegetables",
    },
    cheesesteak: {
      // REPLACE WITH REAL PHOTO: Philly Cheesesteak
      src: "https://images.unsplash.com/photo-1553909489-fd7b821f0b2a?w=800&q=80",
      alt: "Philly cheesesteak sandwich with melted cheese",
    },
    chickenSandwich: {
      // REPLACE WITH REAL PHOTO: Chicken Sandwich
      src: "https://images.unsplash.com/photo-1606755962773-d324e0a1308a?w=800&q=80",
      alt: "Crispy chicken sandwich on a brioche bun",
    },
    rabenBurger: {
      // REPLACE WITH REAL PHOTO: Raben Classic Burger
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      alt: "Classic cheeseburger with fresh toppings",
    },
    hamburger: {
      // REPLACE WITH REAL PHOTO: Hamburger
      src: "https://images.unsplash.com/photo-1550547660-d9450f1790e9?w=800&q=80",
      alt: "Hamburger with lettuce tomato and pickles",
    },
    chickenTacos: {
      // REPLACE WITH REAL PHOTO: Chicken Tacos
      src: "https://images.unsplash.com/photo-1565299585323-38bd4fda1e42?w=800&q=80",
      alt: "Chicken tacos with slaw and salsa",
    },
    fishTacos: {
      // REPLACE WITH REAL PHOTO: Fish Tacos
      src: "https://images.unsplash.com/photo-1512838244311-057a6d8188c4?w=800&q=80",
      alt: "Fish tacos with cabbage slaw and lime",
    },
    steakTacos: {
      // REPLACE WITH REAL PHOTO: Steak Tacos
      src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
      alt: "Steak tacos with onion and cilantro",
    },
    quesadilla: {
      // REPLACE WITH REAL PHOTO: Quesadilla
      src: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&q=80",
      alt: "Cheese quesadilla with peppers and salsa",
    },
  },
  chef: {
    portrait: {
      src: "/images/hero/RaBen_left_side.png",
      alt: "Flavor Kitchen by Chef Raben food truck",
    },
    truck: {
      src: "/images/hero/RaBen_right_side.png",
      alt: "Flavor Kitchen truck menu and service window",
    },
  },
  gallery: [
    { src: "/images/gallery/01-chicken-gyro.png", alt: "Chicken Gyro", name: "Chicken Gyro" },
    { src: "/images/gallery/02-green-chicken-wrap.png", alt: "Green Chicken Wrap", name: "Green Chicken Wrap" },
    { src: "/images/gallery/03-philly-cheesesteak.png", alt: "Philly Cheesesteak", name: "Philly Cheesesteak" },
    { src: "/images/gallery/04-chicken-sandwich.png", alt: "Chicken Sandwich", name: "Chicken Sandwich" },
    { src: "/images/gallery/05-raben-classic-burger.png", alt: "Raben Classic Burger", name: "Raben Classic Burger" },
    { src: "/images/gallery/06-hamburger.png", alt: "Hamburger", name: "Hamburger" },
    { src: "/images/gallery/07-chicken-tacos.png", alt: "Chicken Tacos", name: "Chicken Tacos" },
    { src: "/images/gallery/08-fish-tacos.png", alt: "Fish Tacos", name: "Fish Tacos" },
    { src: "/images/gallery/09-steak-tacos.png", alt: "Steak Tacos", name: "Steak Tacos" },
    { src: "/images/gallery/10-quesadilla.png", alt: "Quesadilla", name: "Quesadilla" },
  ],
} as const;

export type MenuShowcaseImageKey = keyof typeof images.menuShowcase;

export function getMenuItemImage(itemName: string): string {
  const item = images.gallery.find((g) => g.name === itemName);
  return item?.src ?? images.gallery[0].src;
}

export const siteUrl = "https://flavorkitchen.us";
export const ogImage = `${siteUrl}/images/hero/RaBen_left_side.png`;
