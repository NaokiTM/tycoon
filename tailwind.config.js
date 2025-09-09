/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/*.html",  // all HTML in pages/
    "./src/**/*.{js,ts,jsx,tsx}", // any scripts/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}