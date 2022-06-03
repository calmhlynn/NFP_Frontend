module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx"
  ],
  theme: {
    minWidth: {
      '1/2': '50%'
    },
    minHeight: {
      '1/2': '50%'
    },
    extend: {
      keyframes: {
        zzz: {
          '0%': {transform: 'translate(0, 0)'},
          '50%': {transform: 'translate(15rem, 0)'},
          '100%': {transform: 'translate(15rem, 8rem)'},
        }
      },
      animation: {
        ani: 'zzz 5s infinite'
      }
    },
  },
  plugins: [],
}
