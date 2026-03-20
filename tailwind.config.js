/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
        accentGradientEnd: 'var(--accent-gradient-end)',
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}

