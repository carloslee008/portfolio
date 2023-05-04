/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2d2b2c",
        secondary: "#aaa6c3",
        tertiary: "#201e1f",
        "black-100": "#74941d",
        "black-200": "#060506",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 20px 50px -15px #96be25",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/notebookbg.png')",
      },
    },
  },
  plugins: [],
};