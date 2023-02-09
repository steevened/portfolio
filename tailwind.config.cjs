/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0F',
        blueBtn: '#18C8FF',
        purpleBtn: '#933FFE',
        blur: '#1a1b23',
      },
    },
  },
  plugins: [],
};
