/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['var(--font-mono)', ...fontFamily.mono],
      'poppins': ['var(--font-poppins)', ...fontFamily.sans]
    },
  },
  screens: {
    'xsm': '360px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  plugins: [],
};
