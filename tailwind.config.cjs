/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black","lofi"],
  },
}
