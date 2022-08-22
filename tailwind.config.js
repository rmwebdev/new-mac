const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    // screens: {

    //   // sm: '480',
    //   // md: '768',
    //   'xs': '475px',
    //   ...defaultTheme.screens,
      
    // },
    extend: {
      colors: {
      primary: 'rgba(18, 73, 129, 1)',
      hoverslide:'rgba(188, 160, 90, 0.2)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
  important: '#app',
}
