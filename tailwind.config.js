/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          BettyNoir: ["BettyNoir", "sans-serif"],
          Oswald: ["Oswald", "sans-serif"],
          Frontage3D: ["Frontage-3D", "sans-serif"],
          FrontageBold: ["Frontage-Bold", "sans-serif"],
          FrontageOutline: ["Frontage-Outline", "sans-serif"],
          FrontageCondensedOutline: ["Frontage-Condensed-Outline", "sans-serif"],
          FrontageRegular: ["Frontage-Regular", "sans-serif"],
          BebasNeueRegular: ["BebasNeue-Regular", "sans-serif"],
          CourierPrimeBold: ["CourierPrime-Bold", "sans-serif"],
          CourierPrimeBoldItalics: ["CourierPrime-BoldItalics", "sans-serif"],
          CourierPrimeItalics: ["CourierPrime-Italics", "sans-serif"],
          CourierPrimeRegular: ["CourierPrime-Regular", "sans-serif"],
          RobotoSlab: ["RobotoSlab", "sans-serif"],
        }
    },
  },
  plugins: [],
}