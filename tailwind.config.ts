import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        'warm-white': '#FFFEF9',
        wheat: '#D4A853',
        crust: '#8B5E34',
        'dark-crust': '#5C3D22',
        charcoal: '#2D2A26',
        'soft-brown': '#A67C52',
        accent: '#C4956A',
        blush: '#E8D5C4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
