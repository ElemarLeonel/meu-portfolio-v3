const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      ...colors,
      blue: {
        50: "#e6e8ec",
        100: "#b1b9c5",
        200: "#8b97a9",
        300: "#566882",
        400: "#354a69",
        500: "#031d44",
        600: "#031a3e",
        700: "#021530",
        800: "#021025",
        900: "#010c1d",
      },
      orange: {
        50: "#fbf8f3",
        100: "#f4e9d9",
        200: "#eedec7",
        300: "#e6cfad",
        400: "#e1c59d",
        500: "#dab785",
        600: "#c6a779",
        700: "#9b825e",
        800: "#786549",
        900: "#5c4d38",
      },
      "ivory-white": "#FBF8F3",
    },
    extend: {
      fontFamily: {
        spacegrotesk: ["var(--font-space-grotesk)"],
        circularstd: ["var(--font-circular-std)"],
      },
      dropShadow: {
        primary: "0px 32px 32px rgba(255, 255, 255, 0.20)",
        button: "0px 15px 20px rgba(225, 197, 157, 0.18)",
        tech: "0px 0px 32px rgba(255, 255, 255, 0.20)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
