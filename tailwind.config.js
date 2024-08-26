/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        90: '22.5rem',
      },
      height: {
        122: '30.5rem',
      },
      padding: {
        2.25: '0.5625rem',
      },
      fontSize: {
        xxs: '0.375rem',
      },
      backgroundImage: {
        wave: "url('/src/assets/wave.svg')",
      },
      keyframes: {
        wave: {
          from: {'background-position': '0 0'},
          to: {'background-position': '350% 0'},
        },
      },
    },
  },
  plugins: [],
}
