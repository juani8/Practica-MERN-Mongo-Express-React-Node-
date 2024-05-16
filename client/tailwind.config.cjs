/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        background_default: '#bg-gradient-to-r from-purple-500 to-pink-500',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'poppins-light': ['Poppins', 'sans-serif', '300'],
        'poppins-regular': ['Poppins', 'sans-serif', '400'],
        'poppins-bold': ['Poppins', 'sans-serif', '700'],
        'poppins-extrabold': ['Poppins', 'sans-serif', '800'],
      },
    },
  },
  plugins: [],
}
