/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // using daiysyUI
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#240D57",
          secondary: "#4F4F4F",
          accent: "#828282",
          neutral: "#8456EC",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
