import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a961',
          50: '#faf6ef',
          100: '#f5edd7',
          200: '#ebdbc8',
          300: '#ddb894',
          400: '#d4a576',
          500: '#c9a961',
          600: '#b89851',
          700: '#9a7d41',
          800: '#7d6436',
          900: '#64502c',
          950: '#3a2d17',
        },
        navy: {
          DEFAULT: '#1e3a5f',
          50: '#f2f5f8',
          100: '#e1e8ef',
          200: '#c8d4e1',
          300: '#9fb4cc',
          400: '#6f8fb0',
          500: '#4a7399',
          600: '#335c82',
          700: '#2a4c6c',
          800: '#243f5a',
          900: '#1e3a5f',
          950: '#14253d',
        },
        cream: {
          DEFAULT: '#FCFBF8',
          50: '#ffffff',
          100: '#fcfbf8',
          200: '#f9f8f6',
          300: '#f5f3f0',
          400: '#f0eeeb',
          500: '#ebe9e6',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-line': 'scrollLine 2s infinite ease-in-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -2px rgba(0, 0, 0, 0.08)',
        'gold': '0 0 30px rgba(201, 169, 97, 0.3)',
        'gold-lg': '0 0 60px rgba(201, 169, 97, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;