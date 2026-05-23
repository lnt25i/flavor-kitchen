export const site = {
  name: "Flavor Kitchen by Chef Raben",
  tagline: "Bold Flavor. Made Fresh.",
  location: "West Palm Beach, FL",
  locationBadge: "Palm Beach Florida",
  mission: "Bold Flavor. Made Fresh.",
  socialHandle: "@RaBenFlavorKitchen",
};

export const contact = {
  email: "info@flavorkitchen.us",
  responseTime:
    "We typically respond within 24–48 hours on business days.",
  social: {
    instagram: "https://instagram.com/RaBenFlavorKitchen",
    facebook: "https://facebook.com/RaBenFlavorKitchen",
    tiktok: "https://tiktok.com/@RaBenFlavorKitchen",
  },
};

export const chefStory = {
  foodTruck:
    "Flavor Kitchen is Chef Raben’s mobile food truck — street food served from the window across Palm Beach County. Follow @RaBenFlavorKitchen to catch us at the next stop.",
  truckMenu:
    "The ten items on the truck wrap are the full menu: gyros, wraps, cheesesteak, sandwiches, burgers, tacos, and quesadilla — each shown on the side of the truck.",
  palmBeach:
    "West Palm Beach, FL · Palm Beach Florida. Find the truck at rotating stops — follow us for today’s location.",
};

/** Real menu from truck wrap + owner menu graphics (names & descriptions only). */
export interface TruckMenuItem {
  number: number;
  name: string;
  /** Text printed on owner menu photo; empty if not shown. */
  description: string;
  /** // TO BE CONFIRMED BY CHEF RABEN — not shown on truck wrap or menu graphics */
  price: string | null;
  image: string;
}

export const truckMenu: TruckMenuItem[] = [
  {
    number: 1,
    name: "Chicken Gyro",
    description: "grilled chicken, lettuce, tomato, red onion, tzatziki",
    price: null,
    image: "/images/menu/01-chicken-gyro.png",
  },
  {
    number: 2,
    name: "Green Chicken Wrap",
    description: "chicken, lettuce, tomato, cucumber, house sauce",
    price: null,
    image: "/images/menu/02-green-chicken-wrap.png",
  },
  {
    number: 3,
    name: "Philly Cheesesteak",
    description: "sliced beef, onions, peppers, melted cheese",
    price: null,
    image: "/images/menu/03-philly-cheesesteak.png",
  },
  {
    number: 4,
    name: "Chicken Sandwich",
    description: "chicken filet, lettuce, tomato, pickles, sauce",
    price: null,
    image: "/images/menu/04-chicken-sandwich.png",
  },
  {
    number: 5,
    name: "Raben Classic Burger",
    description: "beef patty, cheese, lettuce, tomato, onion",
    price: null,
    image: "/images/menu/05-raben-classic-burger.png",
  },
  {
    number: 6,
    name: "Hamburger",
    description: "beef patty, lettuce, tomato, onion, pickles",
    price: null,
    image: "/images/menu/06-hamburger.png",
  },
  {
    number: 7,
    name: "Chicken Tacos",
    description: "seasoned chicken, slaw, pico, sauce",
    price: null,
    image: "/images/menu/07-chicken-tacos.png",
  },
  {
    number: 8,
    name: "Fish Tacos",
    description: "fish, slaw, pico, lime crema",
    price: null,
    image: "/images/menu/08-fish-tacos.png",
  },
  {
    number: 9,
    name: "Steak Tacos",
    description: "steak, onion, cilantro, salsa",
    price: null,
    image: "/images/menu/09-steak-tacos.png",
  },
  {
    number: 10,
    name: "Quesadilla",
    description: "melted cheese, peppers, onions, salsa",
    price: null,
    image: "/images/menu/10-quesadilla.png",
  },
];

export const featuredDishes = [
  truckMenu[0],
  truckMenu[4],
  truckMenu[6],
];

/** // TO BE CONFIRMED BY CHEF RABEN — sample stops for layout only; follow social for real locations */
export const weeklySchedule = [
  {
    day: "Monday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for pop-ups.",
  },
  {
    day: "Tuesday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for today’s stop.",
  },
  {
    day: "Wednesday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for today’s stop.",
  },
  {
    day: "Thursday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for today’s stop.",
  },
  {
    day: "Friday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for today’s stop.",
  },
  {
    day: "Saturday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for today’s stop.",
  },
  {
    day: "Sunday",
    location: "// TO BE CONFIRMED BY CHEF RABEN",
    hours: "—",
    note: "Private events — contact to book the truck.",
  },
];

export const hoursOfOperation = {
  general:
    "// TO BE CONFIRMED BY CHEF RABEN — follow @RaBenFlavorKitchen for truck hours and stops.",
  catering:
    "// TO BE CONFIRMED BY CHEF RABEN — contact info@flavorkitchen.us to book the truck.",
};
