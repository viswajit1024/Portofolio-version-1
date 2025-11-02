/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'blink':'blink 1s steps(5,start) infinite'
      },
      keyframes:{
        blink:{
          '100%':{visibility:"hidden"}
        }
      }
    },
  },
  plugins: [],
}

