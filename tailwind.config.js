/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#EEEEEE',
        'blue': '#76ABAE',
        'gray': '#31363F',
        'light-gray': '#3E4958',
        'dark': '#222831',
        'dark-blue': '#1D2026',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
