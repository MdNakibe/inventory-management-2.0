/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          '50': '#ebfef3',
          '100': '#d0fbe0',
          '200': '#a4f6c6',
          '300': '#6aeba8',
          '400': '#2fd886',
          '500': '#0abf6d',
          '600': '#009957',
          '700': '#007c4a',
          '800': '#03623c',
          '900': '#045033',
          '950': '#012d1e',
        },
      },
    },
  },
  plugins: [require("./form")],
};
