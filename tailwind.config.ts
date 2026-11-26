import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        abeto: "#3a4e37",
        "abeto-deep": "#172019",
        "solo-argiloso": "#743c30",
        "cobre-desbotado": "#a67956",
        "linho-macio": "#ede7da",
        "madeira-oliveira": "#84785f",
        ink: "#11140f",
        coal: "#1b2118",
        fog: "#cfc6b8",
        champagne: "#a67956",
        brass: "#84785f",
        pearl: "#ede7da"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        "soft-gold": "0 24px 80px rgba(58, 78, 55, 0.2)",
        "brand-depth": "0 28px 90px rgba(17, 20, 15, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
