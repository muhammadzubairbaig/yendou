/* eslint-disable @typescript-eslint/no-require-imports, no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssAnimate = require('tailwindcss-animate');
const tailwindTypography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindTypography],
};
