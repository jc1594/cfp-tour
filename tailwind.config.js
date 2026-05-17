/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1a1a1a',
        card: '#2c3e50',
        'card-alt': '#34495e',
        accent: { DEFAULT: '#3498db', dark: '#2980b9' },
        badge: '#e67e22',
        primary: '#ecf0f1',
        secondary: '#bdc3c7',
        muted: '#95a5a6',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
