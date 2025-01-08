/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand", "serif"],
      },
      colors: {
        primary: "#272932",
        accent: "#0F7173",
        bg: "#E7ECEF",
        success: "#B0C4B1",
        fail: "#F05D5E",
      },
    },
  },
  plugins: [],
};
