/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4243dc',
        secondary: '#1e1e1e',
        lightGray: '#d2d2d2',
        darkGray: '#929292',
        customWhite: '#f6f6f6',
        darkText: '#333333',
        customPink: '#ef2469',
      },

      fontSize: {
        '10xl': '9rem',
      },

      width: {
        4.5: '18px',
        5.5: '22px',
        15: '60px',
        17: '68px',
        100: '100px',
        150: '150px',
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
        750: '750px',
        800: '800px',
        900: '900px',
        1000: '1000px',
      },

      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}