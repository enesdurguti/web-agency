/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#5e62d1',
        secondary: '#5fecc8',
        customWhite: '#e0e2ee',
        darkPrimary: '#4A4FCB',
      },

      fontSize: {
        40: '40px',
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

      height: {
        4.5: '18px',
        5.5: '22px',
        15: '60px',
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
    },
  },
  plugins: [],
}