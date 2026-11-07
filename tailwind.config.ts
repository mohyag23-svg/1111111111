import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          400: "#e5c378",
          500: "#d4af37",
          600: "#b89243",
        },
        premium: {
          DEFAULT: "#fdf5e6",
          80: "rgba(253, 245, 230, 0.8)",
          60: "rgba(253, 245, 230, 0.6)",
        },
        cyan: {
          DEFAULT: "#3FE3D1",
          400: "#5EF2E2",
          500: "#3FE3D1",
          600: "#22B5A5",
        },
        royal: {
          DEFAULT: "#2B57FF",
          400: "#4D73FF",
          500: "#2B57FF",
          600: "#173DC7",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
