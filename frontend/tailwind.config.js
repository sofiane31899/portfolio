/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px,#ffffff 100px);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

// screens: {
//   lg: { max: "1023px" },
//   // => @media (max-width: 1023px) { ... }

//   md: { max: "767px" },
//   // => @media (max-width: 767px) { ... }

//   sm: { max: "639px" },
//   // => @media (max-width: 639px) { ... }

//   xs: { max: "479px" },
//   // => @media (max-width: 479px) { ... }
// },
