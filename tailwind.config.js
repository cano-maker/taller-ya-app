/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'DEFAULT': '#3b82f6',
          'dark': '#1e40af'
        },
        'secondary': '#16a34a',
        'neutral': {
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '800': '#1f2937',
        }
      }
    },
  },
  plugins: [],
}
