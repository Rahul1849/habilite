import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Habilite Clinics Brand Colors - Matching Dr. Parag Telang
        primary: {
          50: '#e8f0f7',
          100: '#d1e1ef',
          200: '#a3c3df',
          300: '#75a5cf',
          400: '#4787bf',
          500: '#1a4d7a', // Primary brand color
          600: '#153e62',
          700: '#102f4a',
          800: '#0a1f32',
          900: '#051019',
        },
        accent: {
          red: '#e74c3c',
          'red-dark': '#c0392b',
          gold: '#ffd700',
        },
        secondary: {
          50: '#f0f9f5',
          100: '#e1f3eb',
          200: '#c3e7d7',
          300: '#a5dbc3',
          400: '#87cfaf',
          500: '#69c39b', // Secondary brand color
          600: '#549c7c',
          700: '#3f755d',
          800: '#2a4e3e',
          900: '#15271f',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Accent color
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
