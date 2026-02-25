import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A67130',
        'primary-dark': '#8B5A24',
        secondary: '#312F1F',
        accent: '#5B819E',
        'neutral-light': '#F3EEE3',
        'neutral-medium': '#B5ADA4',
        'neutral-dark': '#EBDFD6',
        dark: '#363636',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-tablet': '60px',
        'section-mobile': '40px',
      },
      borderRadius: {
        'card': '8px',
        'input': '6px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
