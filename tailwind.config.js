/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4e1f85",
        purple: {
          100: "#7443ac",
          10: "#4E1F851A"
        },
        orange: "#fe9000",
        green: "#72a98f",
        black: "#222",
        white: "#f9f9f9",
        gray: {
          100: "#f3f3f3",
          150: "#f9f9f9",
          200: "#d9d9d9",
          900: "#00000080",
        },
        blue: {
          600: "#1022C1"
        }
      }
    },
  },
  plugins: [],
}

