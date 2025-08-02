// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define your custom font utilities here
        nike: ['Nike Futura ND', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Add any custom colors you might need
        'custom-dark': '#1D1616',
      }
    },
  },
  plugins: [],
}