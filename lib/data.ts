export const site = {
  name: "Flavor Kitchen by Chef Raben",
  tagline: "Five Cultures. One Truck. Infinite Flavor.",
  location: "Palm Beach County, Florida",
  mission: "We cook with culture, serve with heart.",
  socialHandle: "@Rabenflavorkitchen",
};

export const contact = {
  email: "info@flavorkitchen.us",
  responseTime:
    "We typically respond within 24–48 hours on business days.",
  social: {
    instagram: "https://instagram.com/Rabenflavorkitchen",
    facebook: "https://facebook.com/Rabenflavorkitchen",
    tiktok: "https://tiktok.com/@Rabenflavorkitchen",
  },
};

export const chefStory = {
  intro:
    "Chef Raben was born in Haiti and grew up with a deep passion for cooking. His culinary identity is shaped by five powerful cuisines — each one a chapter in every plate he serves from the truck.",
  fusion:
    "This unique fusion of Haitian roots, American classics, Greek freshness, French technique, and Caribbean heat is what makes Flavor Kitchen unlike any other food truck. Every dish tells a story — from the streets of Port-au-Prince to the beaches of Palm Beach County.",
  signatures:
    "Signature items include tacos with bold multi-cultural flavors, burgers made with premium ingredients and Chef Raben's signature sauces, and rotating specials inspired by each of his five cuisine traditions.",
  palmBeach:
    "Palm Beach County is home. From West Palm waterfront lunches to Jupiter farmers markets and private events across the county, Flavor Kitchen brings world flavors to your neighborhood.",
};

export const cuisines = [
  {
    id: "haiti",
    name: "Haiti",
    emoji: "🇭🇹",
    tagline: "Roots & soul — griot spices, pikliz heat, and island pride.",
  },
  {
    id: "usa",
    name: "USA",
    emoji: "🇺🇸",
    tagline: "Bold, hearty classics — burgers, BBQ, and comfort done right.",
  },
  {
    id: "greece",
    name: "Greece",
    emoji: "🇬🇷",
    tagline: "Fresh, herby Mediterranean — gyros, tzatziki, and bright salads.",
  },
  {
    id: "france",
    name: "France",
    emoji: "🇫🇷",
    tagline: "Technique and elegance — sauces, balance, and refined depth.",
  },
  {
    id: "caribbean",
    name: "Caribbean",
    emoji: "🌴",
    tagline: "Vibrant, spicy, tropical — jerk, plantains, and sunshine on a plate.",
  },
];

export const featuredDishes = [
  {
    name: "Caribbean Jerk Chicken Taco",
    description:
      "Slow-marinated jerk chicken, island slaw, and Chef Raben's mango-habanero crema on a charred tortilla.",
    imageKey: "jerkTaco" as const,
  },
  {
    name: "The Raben Classic Burger",
    description:
      "Premium beef patty, melted cheese, fresh produce, and signature sauce on a toasted brioche bun.",
    imageKey: "rabenBurger" as const,
  },
  {
    name: "Chicken Gyro — Chef's Special",
    description:
      "Grilled chicken, lettuce, tomato, red onion, and house tzatziki — Greek tradition meets the truck.",
    imageKey: "gyro" as const,
  },
];

export const testimonials = [
  {
    quote:
      "The Haitian Griot Taco stopped me in my tracks — crispy, tangy, and full of soul. We follow @Rabenflavorkitchen everywhere in Palm Beach County.",
    author: "Michelle A.",
    location: "West Palm Beach",
  },
  {
    quote:
      "Chef Raben catered our lakefront wedding. Five cuisines on one menu and every guest asked for seconds.",
    author: "David & Priya K.",
    location: "Jupiter — private event",
  },
  {
    quote:
      "Finally a food truck that tastes like a chef's restaurant. The Raben Classic Burger is the real deal.",
    author: "Carlos M.",
    location: "Delray Beach",
  },
];

export type MenuCategory =
  | "Tacos"
  | "Burgers"
  | "Sides"
  | "Drinks"
  | "Desserts"
  | "Chef Specials";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const menuCategories: Record<MenuCategory, MenuItem[]> = {
  Tacos: [
    {
      name: "Haitian Griot Taco",
      description: "Crispy citrus pork, pikliz slaw, and spicy mayo on a warm tortilla.",
      price: "$14",
    },
    {
      name: "Caribbean Jerk Chicken Taco",
      description: "Jerk-marinated chicken, island slaw, and mango-habanero crema.",
      price: "$13",
    },
    {
      name: "Greek Lamb Taco",
      description: "Seasoned lamb, tzatziki, tomato, onion, and fresh herbs.",
      price: "$15",
    },
    {
      name: "Creole Shrimp Taco",
      description: "Gulf shrimp, remoulade, lettuce, and Creole seasoning.",
      price: "$16",
    },
  ],
  Burgers: [
    {
      name: "The Raben Classic",
      description: "Premium beef, cheese, lettuce, tomato, onion, and signature sauce.",
      price: "$16",
    },
    {
      name: "Haitian Pikliz Burger",
      description: "Beef patty topped with tangy Haitian pikliz and pepper aioli.",
      price: "$17",
    },
    {
      name: "Mediterranean Burger",
      description: "Lamb-beef blend, feta, cucumber, and tzatziki on brioche.",
      price: "$17",
    },
    {
      name: "Bayou BBQ Burger",
      description: "Smoked patty, cheddar, crispy onions, and house BBQ glaze.",
      price: "$16",
    },
  ],
  Sides: [
    {
      name: "Sweet Plantains",
      description: "Caramelized ripe plantains with a touch of cinnamon.",
      price: "$6",
    },
    {
      name: "Sweet Potato Fries",
      description: "Crispy fries with herb salt and lime crema on the side.",
      price: "$7",
    },
    {
      name: "Greek Salad Cup",
      description: "Tomato, cucumber, olive, feta, and lemon-oregano dressing.",
      price: "$8",
    },
    {
      name: "Island Coleslaw",
      description: "Crunchy cabbage slaw with apple cider and scotch bonnet hint.",
      price: "$5",
    },
  ],
  Drinks: [
    {
      name: "Fresh Lemonade",
      description: "House-squeezed with ginger — bright and refreshing.",
      price: "$4",
    },
    {
      name: "Haitian Jus de Grenadille",
      description: "Passion fruit juice — tart, tropical, and authentic.",
      price: "$5",
    },
    {
      name: "Hibiscus Tea",
      description: "Chilled sorrel-style tea lightly sweetened.",
      price: "$4",
    },
    {
      name: "Bottled Water",
      description: "Ice-cold spring water.",
      price: "$2",
    },
  ],
  Desserts: [
    {
      name: "Haitian Pen Patat",
      description: "Sweet potato pudding spiced with cinnamon and nutmeg.",
      price: "$8",
    },
    {
      name: "Churro Bites",
      description: "Warm cinnamon churros with chocolate dipping sauce.",
      price: "$7",
    },
    {
      name: "Seasonal Fruit Cup",
      description: "Chef-selected tropical fruit with honey and mint.",
      price: "$6",
    },
  ],
  "Chef Specials": [
    {
      name: "Chicken Gyro Plate",
      description: "Grilled chicken, tzatziki, vegetables, and warm pita.",
      price: "$15",
    },
    {
      name: "Philly Cheesesteak",
      description: "Sliced beef, peppers, onions, and melted cheese on a hoagie.",
      price: "$16",
    },
    {
      name: "Quesadilla Supreme",
      description: "Melted cheese, peppers, onions, and salsa — shareable size.",
      price: "$14",
    },
    {
      name: "Rotating Culture Special",
      description: "Ask what's fresh — a new dish inspired weekly by Chef's five cuisines.",
      price: "MP",
    },
  ],
};

export const menuCategoryList: MenuCategory[] = [
  "Tacos",
  "Burgers",
  "Sides",
  "Drinks",
  "Desserts",
  "Chef Specials",
];

export const weeklySchedule = [
  {
    day: "Monday",
    location: "Closed — prep & catering planning",
    hours: "—",
    note: "Follow @Rabenflavorkitchen for pop-up announcements.",
  },
  {
    day: "Tuesday",
    location: "West Palm Beach — Clematis Street area",
    hours: "11:00 AM – 2:30 PM",
    note: "Lunch service — downtown workers & waterfront visitors.",
  },
  {
    day: "Wednesday",
    location: "Boca Raton — corporate park rotation",
    hours: "11:30 AM – 2:00 PM",
    note: "Check Instagram for exact lot — rotates weekly.",
  },
  {
    day: "Thursday",
    location: "Delray Beach — Atlantic Avenue corridor",
    hours: "5:00 PM – 9:00 PM",
    note: "Evening service — arts district & dining crowd.",
  },
  {
    day: "Friday",
    location: "Lake Worth Beach — municipal pier vicinity",
    hours: "11:00 AM – 8:00 PM",
    note: "Extended hours — live music nearby most Fridays.",
  },
  {
    day: "Saturday",
    location: "Jupiter — community market & events",
    hours: "10:00 AM – 3:00 PM",
    note: "Farmers market style — full menu available.",
  },
  {
    day: "Sunday",
    location: "Private events & catering — Palm Beach County",
    hours: "By appointment",
    note: "Book weddings, festivals, and backyard celebrations.",
  },
];

export const hoursOfOperation = {
  general:
    "Tuesday–Saturday at rotating Palm Beach County locations. Sunday by booking.",
  catering:
    "Available 7 days with 2+ weeks notice for events over 50 guests across Palm Beach County.",
};
