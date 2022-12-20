/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgMain: "#F6F6F8",
        darkMain: "#262626",
        darkBg: "#313131",
      },
      screens: {
        res: "1280px",
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
