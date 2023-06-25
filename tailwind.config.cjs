/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'new': 'repeat(4, 6rem)'
        },
        gridTemplateRows: {
      

        // Complex site-specific row configuration
        'new': 'minmax(7rem, auto) repeat(5, 6rem)',
      }
    },
  },
  plugins: [],
}
