/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50: 'hsl(220, 100%, 97%)',
          100: 'hsl(220, 95%, 90%)',
          200: 'hsl(220, 90%, 80%)',
          300: 'hsl(220, 85%, 65%)',
          400: 'hsl(220, 80%, 55%)',
          500: 'hsl(220, 75%, 50%)',
          600: 'hsl(220, 70%, 42%)',
          700: 'hsl(220, 65%, 35%)',
          800: 'hsl(220, 60%, 25%)',
          900: 'hsl(220, 55%, 15%)',
        },
        surface: {
          50: 'hsl(225, 20%, 97%)',
          100: 'hsl(225, 15%, 94%)',
          200: 'hsl(225, 12%, 88%)',
          300: 'hsl(225, 10%, 75%)',
          400: 'hsl(225, 8%, 55%)',
          500: 'hsl(225, 8%, 40%)',
          600: 'hsl(225, 10%, 28%)',
          700: 'hsl(225, 12%, 20%)',
          800: 'hsl(225, 15%, 14%)',
          900: 'hsl(225, 20%, 9%)',
          950: 'hsl(225, 25%, 6%)',
        },
        accent: {
          cyan: 'hsl(185, 90%, 50%)',
          emerald: 'hsl(158, 80%, 45%)',
          amber: 'hsl(38, 95%, 55%)',
          rose: 'hsl(350, 85%, 58%)',
          violet: 'hsl(255, 80%, 65%)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-dark': `
          linear-gradient(rgba(100,120,200,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100,120,200,0.03) 1px, transparent 1px)
        `,
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99,102,241,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(99,102,241,0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
