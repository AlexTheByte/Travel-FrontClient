/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#134e4a",
        secondary: "#c2410c",
        white: "#fff",
        black: "#000",
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
