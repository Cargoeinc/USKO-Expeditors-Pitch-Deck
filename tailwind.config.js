/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'usko-blue': '#007aff',
        'usko-blue-light': '#3395ff',
        'usko-blue-dark': '#0062cc',
      },
    },
  },
  plugins: [],
} 