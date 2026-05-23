/** Unsplash placeholders — swap for files in /public/images/ when ready */

export const images = {
  hero: {
    // REPLACE WITH REAL PHOTO: Flavor Kitchen food truck at night, Palm Beach County
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
    alt: "Flavor Kitchen food truck serving guests in Palm Beach County",
  },
  featured: {
    jerkTaco: {
      src: "/images/gallery/07-chicken-tacos.png",
      alt: "Caribbean Jerk Chicken Taco from Flavor Kitchen",
    },
    rabenBurger: {
      src: "/images/gallery/05-raben-classic-burger.png",
      alt: "The Raben Classic Burger from Flavor Kitchen",
    },
    gyro: {
      src: "/images/gallery/01-chicken-gyro.png",
      alt: "Chicken Gyro Chef Special from Flavor Kitchen",
    },
  },
  chef: {
    portrait: {
      // REPLACE WITH REAL PHOTO: Chef Raben portrait, professional kitchen or truck
      src: "https://images.unsplash.com/photo-1574489441779-0bb9a4d4d0e8?w=800&q=80",
      alt: "Chef Raben preparing food",
    },
    cooking: {
      // REPLACE WITH REAL PHOTO: Chef Raben at grill or prep station
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Chef Raben cooking on the line",
    },
    truck: {
      // REPLACE WITH REAL PHOTO: Flavor Kitchen truck exterior, Palm Beach event
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
      alt: "Flavor Kitchen food truck at a community event",
    },
  },
  cuisines: {
    haiti: {
      // REPLACE WITH REAL PHOTO: Haitian cuisine inspiration
      src: "https://images.unsplash.com/photo-1604908176997-431404ef1f9c?w=400&q=80",
      alt: "Haitian culinary inspiration",
    },
    usa: {
      // REPLACE WITH REAL PHOTO: American classic burger culture
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
      alt: "American cuisine inspiration",
    },
    greece: {
      // REPLACE WITH REAL PHOTO: Greek Mediterranean food
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
      alt: "Greek cuisine inspiration",
    },
    france: {
      // REPLACE WITH REAL PHOTO: French culinary technique
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
      alt: "French cuisine inspiration",
    },
    caribbean: {
      // REPLACE WITH REAL PHOTO: Caribbean tropical flavors
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      alt: "Caribbean cuisine inspiration",
    },
  },
  gallery: [
    {
      src: "/images/gallery/01-chicken-gyro.png",
      alt: "Chicken Gyro — Flavor Kitchen menu",
      name: "Chicken Gyro",
    },
    {
      src: "/images/gallery/02-green-chicken-wrap.png",
      alt: "Green Chicken Wrap — Flavor Kitchen menu",
      name: "Green Chicken Wrap",
    },
    {
      src: "/images/gallery/03-philly-cheesesteak.png",
      alt: "Philly Cheesesteak — Flavor Kitchen menu",
      name: "Philly Cheesesteak",
    },
    {
      src: "/images/gallery/04-chicken-sandwich.png",
      alt: "Chicken Sandwich — Flavor Kitchen menu",
      name: "Chicken Sandwich",
    },
    {
      src: "/images/gallery/05-raben-classic-burger.png",
      alt: "Raben Classic Burger — Flavor Kitchen menu",
      name: "Raben Classic Burger",
    },
    {
      src: "/images/gallery/06-hamburger.png",
      alt: "Hamburger — Flavor Kitchen menu",
      name: "Hamburger",
    },
    {
      src: "/images/gallery/07-chicken-tacos.png",
      alt: "Chicken Tacos — Flavor Kitchen menu",
      name: "Chicken Tacos",
    },
    {
      src: "/images/gallery/08-fish-tacos.png",
      alt: "Fish Tacos — Flavor Kitchen menu",
      name: "Fish Tacos",
    },
    {
      src: "/images/gallery/09-steak-tacos.png",
      alt: "Steak Tacos — Flavor Kitchen menu",
      name: "Steak Tacos",
    },
    {
      src: "/images/gallery/10-quesadilla.png",
      alt: "Quesadilla — Flavor Kitchen menu",
      name: "Quesadilla",
    },
  ],
  menu: {
    Tacos: "https://images.unsplash.com/photo-1565299585323-38bd4fda1e42?w=600&q=80",
    Burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    Sides: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80",
    Drinks: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    Desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    "Chef Specials":
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
} as const;

export const siteUrl = "https://flavorkitchen.us";
export const ogImage = images.hero.src;
