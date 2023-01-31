/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#fe5115',
        customWhite: '#e9eaec',
        lightSecondary: '#febdb9'
      },
      
      fontSize: {
        35: '35px',
      },

      maxWidth: {
        10: '10rem',
        70: '70rem',
        60: '60rem',
      },

      width: {
        4.5: '18px',
        5.5: '22px',
        15: '60px',
        17: '68px',
        100: '100px',
        200: '200px',
        250: '250px',
        250: '250px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
      },

      height: {
        4.5: '18px',
        5.5: '22px',
        15: '60px',
        17: '68px',
        100: '100px',
        200: '200px',
        250: '250px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
      },

      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },

      transitionDuration: {
        400: '400ms',
        450: '450ms',
      },

      transitionTimingFunction: {
        customEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [],
}