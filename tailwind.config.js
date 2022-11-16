/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        raleway: "'Raleway', 'sans-serif'",
      }
    },
  },
  plugins: [],
}
