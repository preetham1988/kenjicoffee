/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#3E2723',        // espresso brown: primary text, dark sections
        muted: '#7A6A64',      // secondary text
        paper: '#F5F5F0',      // cream page background
        sand: '#EDE6DA',       // latte: alternate section / tile background
        line: '#DED4C5',       // hairlines
                leaf: '#2E4F32',       // brand green, used for links and accents
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        display: '-0.035em',
        heading: '-0.025em',
      },
    },
  },
  plugins: [],
}
