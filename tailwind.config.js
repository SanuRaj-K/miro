/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helva: ["Helvetica", "Arial", "sans-serif"], // Helvetica stack
        inter: ["Inter", "sans-serif"], // Inter as a separate stack
      },
      colors: {
        primary: "#050038",
      },
    },
  },
  plugins: [require("daisyui")],
};
