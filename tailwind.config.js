/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:      '#080104',
        leather:  '#1a0409',
        parchment:'#eadfc9',
        cream:    '#fff3dc',
        gold:     '#f4c95d',
        'gold-dim':'#9b6b22',
        burgundy: '#6f0f20',
        carmin:   '#b5162d',
        oxblood:  '#4b0712',
        jade:     '#31d8b0',
        'jade-dim':'#0f7f6e',
        dust:     '#2a0610',
        muted:    '#b09078',
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
