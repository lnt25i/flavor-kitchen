/** Unsplash placeholders — swap for files in /public/images/ when ready */

export const images = {
  hero: {
    // REPLACE WITH REAL PHOTO: food truck at service window, golden hour
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80",
    alt: "Flavor Kitchen food truck serving fresh meals",
  },
  featured: {
    jerkChicken: {
      // REPLACE WITH REAL PHOTO: signature jerk chicken plate
      src: "https://images.unsplash.com/photo-1608039755401-4566d6ac4c58?w=800&q=80",
      alt: "Jerk chicken with rice and peas",
    },
    plantainBowl: {
      // REPLACE WITH REAL PHOTO: Caribbean plantain bowl
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      alt: "Plantain power bowl with fresh toppings",
    },
    seafoodPoBoy: {
      // REPLACE WITH REAL PHOTO: seafood po'boy
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      alt: "Crispy seafood po'boy",
    },
  },
  chef: {
    portrait: {
      // REPLACE WITH REAL PHOTO: Chef Raben in kitchen or at truck
      src: "https://images.unsplash.com/photo-1574489441779-0bb9a4d4d0e8?w=800&q=80",
      alt: "Chef Raben preparing food",
    },
    cooking: {
      // REPLACE WITH REAL PHOTO: chef at grill or prep station
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Chef cooking on the line",
    },
    truck: {
      // REPLACE WITH REAL PHOTO: Flavor Kitchen truck exterior
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      alt: "Food truck at a community event",
    },
  },
  gallery: [
    {
      // REPLACE WITH REAL PHOTO: crowd at truck
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      alt: "Guests enjoying street food",
    },
    {
      // REPLACE WITH REAL PHOTO: plated special
      src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&q=80",
      alt: "Chef's special plated dish",
    },
    {
      // REPLACE WITH REAL PHOTO: catering setup
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      alt: "Catering spread at private event",
    },
    {
      // REPLACE WITH REAL PHOTO: team or community moment
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      alt: "Dining at an outdoor venue",
    },
  ],
  menu: {
    appetizers: "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=600&q=80",
    mains: "https://images.unsplash.com/photo-1563379926895-4fbb64b0424e?w=600&q=80",
    sides: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80",
    drinks: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
} as const;

export const siteUrl = "https://flavorkitchen.us";
export const ogImage = images.hero.src;
