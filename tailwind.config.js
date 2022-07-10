/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/component/**/*.{js, jsx}',
    './pages/**/*.{js, jsx}',
    './pages/*.{js, jsx}'
  ],
  theme: {
    extend: {
      colors:{
        'violet' : '#634AB7',
        'main' : '#23272A',
        'dark-grey' : '#2C2F33',
        'grey' : '#99AAB5',
        'card' : '#3C4042' 
      },
      fontFamily : {
        'nask' : 'Noto Naskh Arabic',
        'popins': 'Poppins'

      }
    },
  },
  plugins: [],
}