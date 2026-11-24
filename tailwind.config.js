/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        secondary: "#191919",
        card: "#22201D",
        accent: {
          DEFAULT: "#C99A55",
          light: "#E5BD82",
          dark: "#A87A38",
        },
        text: {
          main: "#F5F0E8",
          muted: "#A9A29A",
        },
        border: "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        'ken-burns': 'kenBurns 25s ease-out infinite alternate',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
