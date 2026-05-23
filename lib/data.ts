import type { MenuShowcaseImageKey } from "./images";

export const site = {
  name: "Flavor Kitchen by Chef Raben",
  tagline: "Bold Flavor. Made Fresh.",
  location: "West Palm Beach, FL",
  locationBadge: "Palm Beach Florida",
  mission: "We cook with culture, serve with heart.",
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
    "Flavor Kitchen is a mobile food truck — street food with premium quality. We come to you across Palm Beach County; there is no fixed dining room. Follow @RaBenFlavorKitchen to catch us at the next stop.",
  intro:
    "Chef Raben was born in Haiti and grew up with a deep passion for cooking. His culinary identity blends Haitian roots, American classics, Greek freshness, French technique, and Caribbean heat — the same five cultures you taste from the truck window.",
  fusion:
    "Every dish on the Flavor Kitchen truck is made fresh with bold flavor — from gyros and wraps to burgers, tacos, and quesadillas. Serving Palm Beach County from the window, not a dining room.",
  signatures:
    "The full menu painted on the truck is what we serve: ten signature items, no shortcuts, no placeholders.",
  palmBeach:
    "Home base is West Palm Beach, Florida. Find the truck at rotating stops — follow us to know where we’ll be next.",
};

export const cuisines = [
  { id: "haiti", name: "Haiti", emoji: "🇭🇹", tagline: "Roots & soul on every plate." },
  { id: "usa", name: "USA", emoji: "🇺🇸", tagline: "Bold, hearty classics." },
  { id: "greece", name: "Greece", emoji: "🇬🇷", tagline: "Fresh Mediterranean flavor." },
  { id: "france", name: "France", emoji: "🇫🇷", tagline: "Technique and balance." },
  { id: "caribbean", name: "Caribbean", emoji: "🌴", tagline: "Vibrant island heat." },
];

/** Real menu from the Flavor Kitchen truck wrap */
export interface TruckMenuItem {
  number: number;
  name: string;
  description: string;
  price: string;
  image: string;
  showcaseImageKey: MenuShowcaseImageKey;
}

export const truckMenu: TruckMenuItem[] = [
  {
    number: 1,
    name: "Chicken Gyro",
    description: "Grilled chicken, lettuce, tomato, red onion, tzatziki.",
    price: "$12.99",
    image: "/images/gallery/01-chicken-gyro.png",
    showcaseImageKey: "gyro",
  },
  {
    number: 2,
    name: "Green Chicken Wrap",
    description: "Chicken, lettuce, tomato, cucumber, house sauce.",
    price: "$11.99",
    image: "/images/gallery/02-green-chicken-wrap.png",
    showcaseImageKey: "wrap",
  },
  {
    number: 3,
    name: "Philly Cheesesteak",
    description: "Sliced beef, onions, peppers, melted cheese.",
    price: "$13.99",
    image: "/images/gallery/03-philly-cheesesteak.png",
    showcaseImageKey: "cheesesteak",
  },
  {
    number: 4,
    name: "Chicken Sandwich",
    description: "Chicken filet, lettuce, tomato, pickles, sauce.",
    price: "$11.99",
    image: "/images/gallery/04-chicken-sandwich.png",
    showcaseImageKey: "chickenSandwich",
  },
  {
    number: 5,
    name: "Raben Classic Burger",
    description: "Beef patty, cheese, lettuce, tomato, onion.",
    price: "$14.99",
    image: "/images/gallery/05-raben-classic-burger.png",
    showcaseImageKey: "rabenBurger",
  },
  {
    number: 6,
    name: "Hamburger",
    description: "Beef patty, lettuce, tomato, onion, pickles.",
    price: "$12.99",
    image: "/images/gallery/06-hamburger.png",
    showcaseImageKey: "hamburger",
  },
  {
    number: 7,
    name: "Chicken Tacos",
    description: "Seasoned chicken, slaw, pico, sauce.",
    price: "$11.99",
    image: "/images/gallery/07-chicken-tacos.png",
    showcaseImageKey: "chickenTacos",
  },
  {
    number: 8,
    name: "Fish Tacos",
    description: "Fish, slaw, pico, lime crema.",
    price: "$12.99",
    image: "/images/gallery/08-fish-tacos.png",
    showcaseImageKey: "fishTacos",
  },
  {
    number: 9,
    name: "Steak Tacos",
    description: "Steak, onion, cilantro, salsa.",
    price: "$13.99",
    image: "/images/gallery/09-steak-tacos.png",
    showcaseImageKey: "steakTacos",
  },
  {
    number: 10,
    name: "Quesadilla",
    description: "Melted cheese, peppers, onions, salsa.",
    price: "$10.99",
    image: "/images/gallery/10-quesadilla.png",
    showcaseImageKey: "quesadilla",
  },
];

export const featuredDishes = [
  truckMenu[0],
  truckMenu[4],
  truckMenu[6],
];

export const testimonials = [
  {
    quote:
      "The Chicken Gyro is incredible — fresh, bold, and worth the drive. We follow @RaBenFlavorKitchen for every stop in West Palm.",
    author: "Michelle A.",
    location: "West Palm Beach",
  },
  {
    quote:
      "Chef Raben’s truck brings street-food energy with chef-level flavor. The Raben Classic Burger is my go-to.",
    author: "Carlos M.",
    location: "Delray Beach",
  },
  {
    quote:
      "Catered our event with the full truck menu. Ten items, every one a hit.",
    author: "David K.",
    location: "Palm Beach County",
  },
];

export const weeklySchedule = [
  {
    day: "Monday",
    location: "Closed — prep & catering",
    hours: "—",
    note: "Follow @RaBenFlavorKitchen for pop-ups.",
  },
  {
    day: "Tuesday",
    location: "West Palm Beach — Clematis area",
    hours: "11:00 AM – 2:30 PM",
    note: "Lunch stop downtown — catch us curbside.",
  },
  {
    day: "Wednesday",
    location: "Palm Beach County — rotating",
    hours: "11:30 AM – 2:00 PM",
    note: "Check Instagram for the lot.",
  },
  {
    day: "Thursday",
    location: "Delray Beach — Atlantic corridor",
    hours: "5:00 PM – 9:00 PM",
    note: "Evening street-food stop.",
  },
  {
    day: "Friday",
    location: "Lake Worth Beach area",
    hours: "11:00 AM – 8:00 PM",
    note: "Extended Friday hours.",
  },
  {
    day: "Saturday",
    location: "Jupiter — markets & events",
    hours: "10:00 AM – 3:00 PM",
    note: "Full truck menu.",
  },
  {
    day: "Sunday",
    location: "Private events — by appointment",
    hours: "Book ahead",
    note: "Catering across the county.",
  },
];

export const hoursOfOperation = {
  general: "Tuesday–Saturday at rotating Palm Beach County stops.",
  catering: "Sunday and private bookings — 2+ weeks notice for large events.",
};
