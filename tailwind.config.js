/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "80em" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "62em" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "48em" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "30em" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        p: ["Montserrat", "sans-serif"],
        h1: ["Bebas Neue", "sans-serif"],
        button: ["Montserrat", "sans-serif"],
      },
      html: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#D9D9D9",
          borderRadius: "17px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#60606C",
          borderRadius: "17px",
          height: "8px",
        },
        "&::-webkit-scrollbar-corner": {
          background: "rgba(0,0,0,0)",
        },
      },
      colors: {
        gray: {
          300: "#40ADF4",
          500: "#35A5F5",
          800: "#00006f",
        },
        blue: {
          300: "#40ADF4",
          500: "#35A5F5",
          800: "#00006f",
        },
        darkblue: {
          700: "#030D40",
        },
        customgray: {
          500: "#BBBBBB",
        },
      },
    },
  },
  plugins: [],
};