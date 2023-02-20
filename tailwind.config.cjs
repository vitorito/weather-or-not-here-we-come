/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['"Noto Sans Mono"', 'monospace'],
      'poppins': ['"Poppins"', 'sans-serif']
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
