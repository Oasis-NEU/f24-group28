/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {},
    fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif,],
      mono: [...defaultTheme.fontFamily.mono,],
    },
  },
  
  plugins: [],
}

