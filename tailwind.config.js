// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customoffwhite: "#1e1e1e", // Define your custom color#DEF2C8
        customTeagreen: "#000000", // Define another custom color  "#C5DAC1"
        customAshgrey: "#BCD0C7",
        customGrey: "#A9B2AC",
        customDarkgrey: "#898980",
        lightgrey: "#1e1e1e",
        offwhite: "#DEF2C8",
        metalblack: "#111111",
      },
    },
  },
  plugins: [],
};
