/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgMain: "#F6F6F8",
      },
      width: {
        main: "calc(100vw - 24rem)",
      },
      translate: {
        mid: "-50%",
      },
    },
  },
  plugins: [],
};
