/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-space-grotesk)'],
      serif: ['var(--font-biorhyme)'],
      mono: ['var(--font-space-mono)'],
    },
    colors: {
      main: colors.slate,
      alt: colors.amber,
      ...colors,
    },
  },
  plugins: [],
};
