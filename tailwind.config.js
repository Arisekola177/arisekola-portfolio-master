/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
      font1: ["Poppins", "sans-serif"],
      font2: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
