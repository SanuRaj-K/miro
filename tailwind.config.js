/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Helvetica stack
        inter: ["Inter", "sans-serif"], // Inter as a separate stack
      },
    },
  },
  plugins: [require("daisyui")],
};
