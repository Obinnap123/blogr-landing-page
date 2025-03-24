import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        xs: "540px", // ✅ Custom breakpoint
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
