/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '620px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
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

