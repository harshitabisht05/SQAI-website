/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',  // <-- THIS IS MISSING

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eurostile: ['Eurostile'],
        condensed: ['CondensedMedium'],
      },
    },
  },
  plugins: [],
}