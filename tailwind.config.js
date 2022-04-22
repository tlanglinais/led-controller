module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'main': ['Ubuntu'],
        'cardHeader': ['Heebo']
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.25xl': '3.25rem',
        '5.5xl': '3.5rem',
      },
      gridTemplateRows: {
        'half': 'repeat(2, 50%)'
      },
      border: {
        'curved-left': ['border-top-left-radius: 1vmax', 'border-bottom-left-radius: 1vmax;']
      },
      maxHeight: {
        'half': '50%'
      },
      width: {
        'vw': '100vw',
        'min': 'min-content',
        'max': 'max-content'
      },
      height: {
        'vh': '100vh',
        'min': 'min-content',
        'max': 'max-content'
      },
      margin: {
        '0auto': '0 auto'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
