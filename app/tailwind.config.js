/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#F3EFE6',
        altBg: '#E9E3D8',
        textPrimary: '#11110F',
        textSecondary: '#5D5A53',
        forestGreen: '#183A2D',
        darkGreen: '#10281F',
        borderLight: '#CDC5B8',
        formWhite: '#FAF9F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
