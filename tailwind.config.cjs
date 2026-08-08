/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#eef1ee',
        surface: '#f7f8f6',
        ink: '#101212',
        metal: '#929a98',
        signal: '#c8ff3d',
        line: '#cdd1ce',
        brand: {
          DEFAULT: '#c8ff3d',
          dark: '#b7f52a',
          black: '#070808',
          steel: '#5d6562',
          soft: '#e8f4ca',
        },
      },
      fontFamily: {
        sans: ['"Onest Variable"', 'sans-serif'],
        mono: ['"Onest Variable"', 'sans-serif'],
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(200, 255, 61, 0.24)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
