module.exports = {
  purge: {
    mode: 'all',
   content: [
    './src/**/*.html'
  ]},
  theme: {
    extend: {
      fontSize: {
       100: '120px'
},
       fontFamily: {
          'sans': ['Inter', 'Inter var', 'Comic Sans MS']
       },
      colors: {
        tsuki: { 
          black: '#131016',
          lavender: '#9E9ACC',
        }
      },
      spacing: {
        7: '1.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
