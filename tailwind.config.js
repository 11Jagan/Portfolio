/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        display: [
          'Cabinet Grotesk',
          'system-ui',
          'sans-serif',
        ],

        sans: [
          'Satoshi',
          'system-ui',
          'sans-serif',
        ],

        serif: [
          'Newsreader',
          'Georgia',
          'serif',
        ],

        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'monospace',
        ],
      },

      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          50: '#F2F2F0',
          100: '#E5E5E2',
          200: '#DCDCDA',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0A0A0A',
        },

        brand: {
          DEFAULT: '#e03c28',
          dark: '#c53423',
          light: '#e66353',
        },
      },

      container: {
        center: true,

        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
        },
      },

      letterSpacing: {
        tightest: '-0.06em',
      },

      animation: {
        marquee: 'marquee 30s linear infinite',

        'marquee-slow':
          'marquee 60s linear infinite',

        'fade-up':
          'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },

      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },

          '100%': {
            transform: 'translateX(-50%)',
          },
        },

        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(24px)',
          },

          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },

  plugins: [],
};