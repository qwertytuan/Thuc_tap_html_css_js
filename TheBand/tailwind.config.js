/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["D:/Thuc_tap/TheBand/html/modal-test.html"],
  theme: {
    extend: {
      colors:{
        'hover-bg': '#ccc',
        'text-2': '#6f6f6f',
        'border-color': '#ddd',
        'color_overlay': 'rgba(0, 0, 0, 0.4)'
      },
      grayscale: {
        50: '50%',
      },
      boxShadow: {
        'custom':'0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      lineHeight: {
        '5.5': '1.406rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}

