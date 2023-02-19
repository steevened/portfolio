/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0F',
        blueBtn: '#18C8FF',
        purpleBtn: '#933FFE',
        blur: '#1a1b23',
        'gray-999': '#090b11',
        'accent-regular': '#7611a6',
        'accent-overlay': 'hsla(280, 89%, 67%, 0.33)',
        'text-gray': '#79808a',
      },
      screens: {
        xs: '375px',
        sm: '794px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
};
