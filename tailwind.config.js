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
        customoffwhite: "#DEF2C8", // Define your custom color
        customTeagreen: "#C5DAC1", // Define another custom color
        customAshgrey: "#BCD0C7",
        customGrey: "#A9B2AC",
        customDarkgrey:"#898980"

      },
    },
  },
  plugins: [],
};
