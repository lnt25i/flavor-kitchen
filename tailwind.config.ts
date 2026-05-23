import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        orange: "#FF6B35",
        cream: "#FFF8F0",
        gold: "#FFB347",
        "rich-black": "#0D0D0D",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "type-hero": ["clamp(2rem,5vw,3.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "type-page": ["clamp(2.25rem,4.5vw,3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "type-section": ["clamp(1.75rem,3.5vw,2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "type-body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "type-body-base": ["1rem", { lineHeight: "1.7" }],
        "type-body-sm": ["0.9375rem", { lineHeight: "1.65" }],
      },
      letterSpacing: {
        brand: "0.18em",
        nav: "0.14em",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0, 0, 0, 0.24)",
        "text-hero": "0 2px 24px rgba(0, 0, 0, 0.55)",
        panel: "0 12px 40px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
