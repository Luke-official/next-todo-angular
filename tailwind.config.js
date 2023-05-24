/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "white": "#fdfdfd",
        "primary": "#1f2937",
        "secondary": "#111a26"
      }
    },
  },
  plugins: [],
}

