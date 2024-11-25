/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        oswald : ["Oswald", "sans-serif"],
        gochi : ["Gochi Hand", "cursive"],
        nuntio : ["Nunito Sans", "sans-serif"],
      },
      backgroundColor : {
        "maroon-100" : "#ed8e9d",
        "maroon-200" : "#ce4257"
      }
    },
  },
  plugins: [],
}

