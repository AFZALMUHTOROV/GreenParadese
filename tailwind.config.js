/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '100dvh': '100dvh',
      },
    },
  },
  plugins: [],
}
