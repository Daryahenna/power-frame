/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f3f2ee',
        ink: '#171717',
        metal: '#7c8287',
        signal: '#d3102f',
        line: '#d4d2cc',
        brand: {
          DEFAULT: '#d3102f',
          dark: '#a50b24',
          black: '#171717',
          steel: '#63686c',
        },
      },
      fontFamily: {
        sans: ['"Golos Text"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(211, 16, 47, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

