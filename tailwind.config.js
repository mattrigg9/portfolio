/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
      backgroundColor: "#242444",
      textDecorationColor: "#4325c7",
      padding: {
        section: "8rem 0",
      },
      colors: {
        primary: "#404079", // #242444 lightened 20%
        secondary: "#6e3b9d",
        warning: "#fde0b8",
      },
    },
  },
  plugins: [],
};
