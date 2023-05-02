/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: '15px',
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '990px',
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "360px",
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "976px",
      xl: "1028px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#2B8CFB",
        second: "#1D1D33",
        trisec: "#20407C",
        third: "#EC254E",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

