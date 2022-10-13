/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontSize: {
      "xs": 14,
      "sm": 16,
      "md": 18,
      "lg": 20,
      "xl": 24,
      "2xl": 32,
    },
    colors: {
      "transparent": "transparent",

      "black": "#000",
      "white": "#fff",

      gray: {
        "900": "#121214",
        "800": "#282024",
        "400": "#7c7c8a",
        "200": "#c4c4cc",
        "100": "#e1e1e6",
      },
      cyan: {
        "500": "#81b8f7",
        "300": "#a2e3fa"
      },  
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
