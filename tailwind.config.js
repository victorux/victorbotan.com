module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pop: "'Poppins', sans-serif",
      },
      colors: {
        pur: {
          DEFAULT: '#5F3D7D',
          dark: '#1B42D7',
        }
      },
      textColor: {
        'primary': '#20242E',
        'secondary': '#505A6E',
        'link' : '#3145DF'
      },
      backgroundColor: {
        'primary': '#3145DF',
        'second' : '#181C2D'
      },
      maxWidth: {
        '500px': '600px'
      },
      flex: {
        '1x2': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
