/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      divider: "#ebeff2",
      white: "#ffffff",
      black: "#000000",
      "blue/800": "#00113d",
      "blue/600": "#213770",
      "blue/200": "#747d94",
      "orange/700": "#F21A05",
      "orange/500": "#f21a05",
      "orange/400": "#f43724",
      "gray/background": "#f5f6f8",
      "gray/500": "#777777",
      "gray/100": "#eaecf0",
      "gray/400": "#b7b7b7",
      "gray/300": "#c3c3c3",
    },
    extend: {},
  },
  plugins: [],
};
