/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#111111',
        'light': '#FFFCF2',
        'dark': '#181716', 
        'accent': '#EB5E28',
      },
      fontFamily: {
        'vogue-text': ['Very Vogue Text', 'sans-serif'],
        'vogue-text-italic': ['Very Vogue Italic', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
