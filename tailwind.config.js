// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0c0a",
        elev: "#14120f",
        ink: "#ede8df",
        muted: "#8e887a",
        accent: "#ff5c28",
        line: "rgba(237,232,223,0.08)",
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
