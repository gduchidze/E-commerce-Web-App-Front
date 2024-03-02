/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'georgian': ['Noto Serif Georgian', 'serif'],
        'sans': ['Noto Sans', 'sans-serif'],
        'volkhov': ['Volkhov', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}