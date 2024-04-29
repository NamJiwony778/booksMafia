/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
    },
    theme: {
      extend: {
        colors: {
          violet: "#393280",
          white: "#FFFFFF",
          orange: "#ED553B",
          grey: "#D1D1D1",
          lightGrey: "#F6F6F6",
          greyText: "#BCBCBC"
        },
        fontSize: {
          base: "1.3rem"
        },
        screens: {         
          sm: "576px",
          md: "768px",
          lg: "1040px",
          xl: "1629px",             
        },
      },
    },
    plugins:[]
  }