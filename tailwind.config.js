/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-400": "hsl(0, 0%, 63%)",
      "gray-900": "hsl(0, 0%, 27%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
