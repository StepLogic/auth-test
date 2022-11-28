/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-banner": "url(/images/auth.png)",
      },
    },
    color: {
      "brown-100": "#774936",
      "brown-200": "#D4A373",
      "brown-300": "#D7C9AA",
      "brown-400": "#FAEDCD",
      "grey-300": "#F0F3F5",
      "red-100": "#E23636",
    },
  },
  plugins: [],
};
