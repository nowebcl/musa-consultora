/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        musa: {
          dark: '#1e2432',
          primary: '#6c729c',
          'primary-hover': '#5b618b',
          'primary-light': '#f0f2fa',
          slate: '#555e75',
          muted: '#84899e',
          line: '#cbd1e1',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.24em',
        'super-wide': '0.3em',
      }
    },
  },
  plugins: [],
}
