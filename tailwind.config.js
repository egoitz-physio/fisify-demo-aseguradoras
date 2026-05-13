/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Medicus-inspired deep blue palette
        surface: {
          DEFAULT: '#0a1628', // Deep navy - main background
          50: '#f5f8fc',
          100: '#1a3050',
          200: '#101f38', // Elevated
          300: '#0d1a2e',
          400: '#0a1628', // Default
          500: '#060f1d', // Darker
        },
        accent: {
          DEFAULT: '#c9a96e', // Champagne gold
          light: '#e0c99a',
          dark: '#a68b4b',
        },
        medicus: {
          DEFAULT: '#1a3a6e', // Medicus brand blue
          light: '#2a4a7e',
          dark: '#0f2548',
        },
        cream: {
          DEFAULT: '#f5f2ed',
          dark: '#e5e0d8',
          muted: '#a8a49c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['Philosopher', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '0' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-surface': 'linear-gradient(180deg, #0a1628 0%, #060f1d 100%)',
      },
    },
  },
  plugins: [],
}
