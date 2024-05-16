import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#295DFA",
        secondary:"#4FE1D4",
        secondary_old: "#344454",
        light: "#f3f4f6",
        light_bg: "#F6FAFF90",
        dark_bg: "#021c69",
        dark_bg_hover: "#0443ff",
        gray_80: "#34445420",
        gray: "#344454",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
