/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2B8CFB',
        second :'#1D1D33',
        trisec : '#20407C'
      }
    },
  },
  plugins: [],
}

