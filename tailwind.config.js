/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        LEITURA : ["Leitura News W04 Roman 3", "serif"],
        INTER : ["Inter" , "sans-serif"],
      }
    },
  },
  plugins: [],
}

