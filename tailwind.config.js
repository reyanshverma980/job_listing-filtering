/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        lightGrayishCyan_bg: "hsl(180, 52%, 96%)",
        lightGrayishCyan_filter: "hsl(180, 31%, 95%)",
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      },
    },
  },
  plugins: [],
};
