import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        card: '#1a1a1a',
        foreground: '#f0f0f0',
        danger: '#ff4444',
        safe: '#4caf50',
        warning: '#ffaa00',
      },
      borderRadius: {
        '2xl': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
