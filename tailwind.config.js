/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          default: "#F6423E",
          '50':  '#fdfcfa',
          '100': '#fbf0e8',
          '200': '#f7d0d0',
          '300': '#eda4a6',
          '400': '#e8747a',
          '500': '#FF6663',
          '600': '#c3373c',
          '700': '#9b292c',
          '800': '#6f1d1e',
          '900': '#451211',
        },
      }
    },
  },
  plugins: [],
}
