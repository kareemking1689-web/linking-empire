/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F3A56',
          dark: '#162A3F',
          light: '#2A4A68',
        },
        gold: {
          DEFAULT: '#C69C6D',
          dark: '#B3895B',
          light: '#D4AD82',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
