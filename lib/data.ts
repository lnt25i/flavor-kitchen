export const contact = {
  email: "hello@flavorkitchen.us",
  phone: "(555) 847-3526",
  responseTime: "We typically respond within 24–48 hours on business days.",
  social: {
    instagram: "https://instagram.com/flavorkitchen",
    facebook: "https://facebook.com/flavorkitchen",
    tiktok: "https://tiktok.com/@flavorkitchen",
  },
};

export const featuredDishes = [
  {
    name: "Raben's Jerk Chicken Plate",
    description:
      "Slow-marinated jerk chicken over coconut rice and peas, with pickled slaw and house hot sauce.",
    imageKey: "jerkChicken" as const,
  },
  {
    name: "Island Plantain Power Bowl",
    description:
      "Sweet plantains, black beans, avocado, and citrus-dressed greens — hearty and bright.",
    imageKey: "plantainBowl" as const,
  },
  {
    name: "Bayou Crunch Po'Boy",
    description:
      "Crispy Gulf-style seafood on a toasted roll with remoulade, lettuce, and tomato.",
    imageKey: "seafoodPoBoy" as const,
  },
];

export const testimonials = [
  {
    quote:
      "The jerk chicken is unreal — smoky, spicy, and perfectly balanced. We drive across town every Thursday just for Flavor Kitchen.",
    author: "Marcus & Denise T.",
    location: "Riverside Market",
  },
  {
    quote:
      "Chef Raben catered our company picnic for 120 people. Professional, on time, and every single plate looked like it came from a restaurant.",
    author: "Elena V., HR Director",
    location: "Corporate catering",
  },
  {
    quote:
      "Finally a food truck that feels special. Premium ingredients, beautiful presentation, and flavors that actually tell a story.",
    author: "James R.",
    location: "Downtown Arts District",
  },
];

export type MenuCategory =
  | "Appetizers"
  | "Mains"
  | "Sides"
  | "Drinks"
  | "Desserts";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const menuCategories: Record<MenuCategory, MenuItem[]> = {
  Appetizers: [
    {
      name: "Spiced Plantain Bites",
      description: "Caramelized plantain coins with lime crema and micro cilantro.",
      price: "$8",
    },
    {
      name: "Island Pepper Wings",
      description: "Crispy wings tossed in scotch bonnet glaze with cooling ranch.",
      price: "$11",
    },
    {
      name: "Coconut Shrimp Skewers",
      description: "Three skewers with mango-chili dipping sauce.",
      price: "$12",
    },
    {
      name: "Chef's Corn Fritters",
      description: "Golden fritters with honey butter and smoked paprika dust.",
      price: "$9",
    },
  ],
  Mains: [
    {
      name: "Raben's Jerk Chicken Plate",
      description: "Half bird, coconut rice & peas, slaw, and house hot sauce.",
      price: "$16",
    },
    {
      name: "Smoked Brisket Sandwich",
      description: "12-hour brisket, pickled onions, and tangy BBQ on brioche.",
      price: "$15",
    },
    {
      name: "Island Plantain Power Bowl",
      description: "Plantains, black beans, avocado, greens, and citrus vinaigrette.",
      price: "$14",
    },
    {
      name: "Bayou Crunch Po'Boy",
      description: "Crispy seafood, remoulade, lettuce, and tomato on a toasted roll.",
      price: "$17",
    },
    {
      name: "Chef's Catch of the Day",
      description: "Market fish with seasonal sides — ask what's fresh today.",
      price: "MP",
    },
  ],
  Sides: [
    {
      name: "Coconut Rice & Peas",
      description: "Fragrant long-grain rice with kidney peas and thyme.",
      price: "$5",
    },
    {
      name: "Street Corn Cup",
      description: "Charred corn with cotija, chili, and lime.",
      price: "$6",
    },
    {
      name: "Pickled Slaw",
      description: "Crunchy cabbage slaw with apple cider tang.",
      price: "$4",
    },
    {
      name: "Sweet Heat Fries",
      description: "Seasoned fries with honey-hot drizzle.",
      price: "$6",
    },
  ],
  Drinks: [
    {
      name: "House Lemonade",
      description: "Fresh-squeezed with a hint of ginger.",
      price: "$4",
    },
    {
      name: "Tropical Iced Tea",
      description: "Black tea with passion fruit and mint.",
      price: "$4",
    },
    {
      name: "Sparkling Citrus Water",
      description: "Light, refreshing, zero sugar.",
      price: "$3",
    },
    {
      name: "Chef's Cold Brew",
      description: "Smooth cold brew with optional vanilla cream.",
      price: "$5",
    },
  ],
  Desserts: [
    {
      name: "Warm Rum Banana Pudding",
      description: "Vanilla wafers, caramelized bananas, and a touch of rum.",
      price: "$8",
    },
    {
      name: "Coconut Lime Square",
      description: "Buttery crust with bright coconut-lime filling.",
      price: "$7",
    },
    {
      name: "Seasonal Fruit Cup",
      description: "Chef-selected fruit with honey and mint.",
      price: "$6",
    },
  ],
};

export const weeklySchedule = [
  {
    day: "Monday",
    location: "Closed",
    hours: "—",
    note: "Prep day — see you soon!",
  },
  {
    day: "Tuesday",
    location: "Riverside Market — 2200 River Walk",
    hours: "11:00 AM – 2:30 PM",
    note: "Lunch service at the waterfront pavilion.",
  },
  {
    day: "Wednesday",
    location: "Tech Campus Lot B — 800 Innovation Dr",
    hours: "11:30 AM – 2:00 PM",
    note: "Corporate lunch crowd — arrive early.",
  },
  {
    day: "Thursday",
    location: "Downtown Arts District — 4th & Main",
    hours: "5:00 PM – 9:00 PM",
    note: "Evening service near the gallery walk.",
  },
  {
    day: "Friday",
    location: "Harbor Park — Pier 12",
    hours: "11:00 AM – 8:00 PM",
    note: "Extended hours — live music nearby most Fridays.",
  },
  {
    day: "Saturday",
    location: "Community Green Farmers Market",
    hours: "10:00 AM – 3:00 PM",
    note: "Family-friendly — full menu available.",
  },
  {
    day: "Sunday",
    location: "Private events & catering",
    hours: "By appointment",
    note: "Book us for brunch, festivals, or celebrations.",
  },
];

export const hoursOfOperation = {
  general: "Tuesday–Friday lunch; Thursday dinner; Saturday market; Sunday by booking.",
  catering: "Available 7 days with 2+ weeks notice for events over 50 guests.",
};
