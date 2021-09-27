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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
