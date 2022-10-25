/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '330px',
      },
    },
    fontFamily: {
      'roboto-slab': ['Roboto Slab', 'serif'],
    },
  },
  plugins: [],
};
