import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b00',
        primary_container: '#ffb693',
        surface: '#131313',
        surface_container_lowest: '#0d0d0d',
        surface_container_low: '#1c1b1b',
        surface_container: '#201f1f',
        surface_container_high: '#2a2a2a',
        surface_container_highest: '#333333',
        surface_bright: '#3a3a3a',
        on_surface: '#e8e6e3',
        on_surface_variant: '#9e9b97',
        outline_variant: 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        ambient: '0 0 40px 0 rgba(30,28,28,0.06)',
        glow: '0 0 24px 0 rgba(255,107,0,0.25)',
        'glow-sm': '0 0 12px 0 rgba(255,107,0,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
