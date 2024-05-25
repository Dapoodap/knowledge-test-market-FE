/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '5px 5px 9px #696969, -5px -5px 9px #ffffff;',
      },
    },
  },
  plugins: [],
}