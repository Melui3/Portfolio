/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:      '#0D0D0D',
        leather:  '#362822',
        parchment:'#E2D4BF',
        cream:    '#EFE5D2',
        gold:     '#C28D39',
        'gold-dim':'#7E5B2E',
        burgundy: '#710912',
        carmin:   '#9A0D19',
        oxblood:  '#4B060C',
        dust:     '#241A16',
        muted:    '#A99683',
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
