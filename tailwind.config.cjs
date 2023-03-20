/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['var(--font-mono)', ...fontFamily.mono],
      'poppins': ['var(--font-poppins)', ...fontFamily.sans]
    },
    screens: {
      'xsm': '460px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
