/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        mediumblue: "#3742fa",
      },
      fontFamily: {
        lato: "Lato",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
