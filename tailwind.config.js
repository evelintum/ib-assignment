/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '8px',
      'md': '0.375rem',
      'lg': '20px',
      'full': '9999px',
      'xl': '30px',
    },
    extend: {
      height: {
        '65': '267px',
      },
      fontFamily: {
        'inb': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./pcs/muffin2.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}