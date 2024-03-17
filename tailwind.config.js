/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
