/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pasture-bg': "url('/src/assets/img/pasture.jpg')",
      },
      backgroundColor: {
        'spring-main': '#3d3753',
        'spring-dark': '#455912',
        'spring-light': '#B9E0B8',
        'fall-main': '#E56B27',
        'fall-dark': '#554457',
        'fall-light': '#FFAA73',
      }
    },
  },
  plugins: [],
}

