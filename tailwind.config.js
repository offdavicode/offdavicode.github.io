/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        beige: '#F5EDE0',
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
          50: '#F5F0FF',
        },
        dark: '#2D2A3E',
        muted: '#6B6580',
        warm: '#F59E0B',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-1': 'float1 5s ease-in-out infinite',
        'float-2': 'float2 7s ease-in-out infinite',
        'float-3': 'float3 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.4s ease-in-out',
        'bounce-slow': 'bounceSlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'cartoon': '4px 4px 0px 0px rgba(124, 58, 237, 0.2)',
        'cartoon-lg': '6px 6px 0px 0px rgba(124, 58, 237, 0.25)',
        'cartoon-hover': '8px 8px 0px 0px rgba(124, 58, 237, 0.3)',
        'soft': '0 4px 20px rgba(124, 58, 237, 0.08)',
        'soft-lg': '0 8px 30px rgba(124, 58, 237, 0.12)',
      },
    },
  },
  plugins: [],
};
