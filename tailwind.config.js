/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:      '#0f0c09',
        leather:  '#1c1510',
        parchment:'#e8dcc8',
        cream:    '#f4ede0',
        gold:     '#c9a84c',
        'gold-dim':'#8a6f30',
        burgundy: '#6b2d3e',
        dust:     '#2e2218',
        muted:    '#7a6a56',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"EB Garamond"', 'Garamond', 'serif'],
        sans:    ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
