const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      "blue-50": "#e6e8ec",
      "blue-100": "#b1b9c5",
      "blue-200": "#8b97a9",
      "blue-300": "#566882",
      "blue-400": "#354a69",
      "blue-500": "#031d44",
      "blue-600": "#031a3e",
      "blue-700": "#021530",
      "blue-800": "#021025",
      "blue-900": "#010c1d",
      "orange-50": "#fbf8f3",
      "orange-100": "#f4e9d9",
      "orange-200": "#eedec7",
      "orange-300": "#e6cfad",
      "orange-400": "#e1c59d",
      "orange-500": "#dab785",
      "orange-600": "#c6a779",
      "orange-700": "#9b825e",
      "orange-800": "#786549",
      "orange-900": "#5c4d38",
      "ivory-white": "#FBF8F3",
    },
    extend: {
      fontFamily: {
        spacegrotesk: ['var(--font-space-grotesk)'],
        circularstd: ['var(--font-circular-std)'],
      },
      dropShadow: {
        'primary': '0px 32px 32px rgba(255, 255, 255, 0.20)',
        'button': '0px 15px 20px rgba(225, 197, 157, 0.18)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};