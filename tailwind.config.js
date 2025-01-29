/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        lightText : "#17cabe",
        bgColor : "#c8f7ee",
      },
    },
  },
  plugins: [],
}

