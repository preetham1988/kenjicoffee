/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kenjige-brown': '#3E2723',
        'kenjige-cream': '#F5F5F0',
        'kenjige-green': '#2E4F32',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}