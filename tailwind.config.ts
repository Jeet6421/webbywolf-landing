/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';


const config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1D4ED8',
        accent: '#F59E0B',
      },
    },
  },
  plugins: [],
};
export default config;

