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
        signal: '#FE5200',
        line: '#cdd1ce',
        brand: {
          DEFAULT: '#FE5200',
          dark: '#FE5200',
          black: '#070808',
          steel: '#5d6562',
          soft: '#FE5200',
        },
      },
      fontFamily: {
        sans: ['"Onest Variable"', 'sans-serif'],
        mono: ['"Onest Variable"', 'sans-serif'],
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(254, 82, 0, 0.26)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
