/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enables dark mode using a "dark" class
    theme: {
      extend: {
        fontFamily: {
          overpass: ["Overpass", "sans-serif"],
        },
        colors: {
          darkBg: "hsl(208, 49%, 14%)", // Dark mode background color
          darkText: "hsl(208, 49%, 85%)", // Dark mode text color
        },
      },
    },
    plugins: [],
  };
  
  