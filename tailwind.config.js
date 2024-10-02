/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dMode': '#2A1B3D',
        'dPurple': '#8860d0',
        'nitroPink': '#FF65FF',
        'artic-blue': '#F0F8FF',
        'dDark': '#2C2F33'
      },
      fontFamily: {
        'headings': ['Rubik', 'sans-serif'],
        'main': ['Montserrat', 'sans-serif'],
        'numbers': ['Onest', 'sans-serif']
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
})
