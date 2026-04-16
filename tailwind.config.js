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
        'custom-dark': '#1D1616',
        'deep-dark': '#0a0a0f',
        'mid-dark': '#06060b',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}