/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sc: { max: "840px" },
      // => @media (max-width: 1535px) { ... }

      xl: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { min: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { min: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      },
    },
  },
  plugins: [],
};
