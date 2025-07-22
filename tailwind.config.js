/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#8AA07D',
        cream: '#F5F5DC',
        terracotta: '#E2725B',
        sage: {
          50: '#f6f8f5',
          100: '#e8f0e4',
          200: '#d3e2cb',
          300: '#b2cca7',
          400: '#8aa07d',
          500: '#6b8359',
          600: '#546743',
          700: '#435236',
          800: '#37422d',
          900: '#2f3827',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfdfa',
          200: '#fafaf2',
          300: '#f5f5dc',
          400: '#eeeecc',
          500: '#e5e5b8',
          600: '#d4d498',
          700: '#c0c079',
          800: '#a8a864',
          900: '#8f8f54',
        },
        terracotta: {
          50: '#fdf5f3',
          100: '#fbe8e5',
          200: '#f6d5d0',
          300: '#efb8b0',
          400: '#e59086',
          500: '#e2725b',
          600: '#d0543d',
          700: '#b04331',
          800: '#923a2d',
          900: '#79342b',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}



