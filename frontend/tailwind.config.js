import { assets } from "./src/assets/assets"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
       'xs':'450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        'mine':'#00000090'
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out', // You can adjust the duration and easing as needed
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      height: {
        '128': '34vw',
      }
    },
  },
  plugins: [],
}