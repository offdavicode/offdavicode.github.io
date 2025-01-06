/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Substitua pelo valor desejado
      },
      animation: {
        'gradient-move': 'moveGradient 3s ease infinite',
      },
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      fontFamily: {
        Inter: ["Inter", "Arial"],
        Kanit: ["Kanit", "Inter", "Arial"],
      },
      boxShadow: {
        'fav': '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
      },
    },
  },
  plugins: [],
}


