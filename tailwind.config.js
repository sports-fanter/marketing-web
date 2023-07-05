/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Burbank Big Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

