/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "media", // Uses system preference (no toggle needed)
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
