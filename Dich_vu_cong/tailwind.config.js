/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["D:/Thuc_tap/Dich_vu_cong/Dich_vu_cong.html"],
  theme: {
    extend: {
      colors:{
        'white_ish':'#f3f3f3',
        'hover-bg': '#ccc',
        'text-2': '#6f6f6f',
        'border-color': '#ddd',
        'color_overlay': 'rgba(0, 0, 0, 0.4)',
        'transparent': 'rgba(0,0,0,0)',
        'greenish':'#009688'
      },
      grayscale: {
        50: '50%',
      },
      boxShadow: {
        'custom':'0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)',
        'custom_redish':'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(215, 25, 32, 0.4)'
      },
      lineHeight: {
        '5.5': '1.406rem',
      },
      width: {
        '1200': '1200px',
        'fullriel': '100vw',
        'mosthalf': '49.8%',
        'longlong':'3960px',
        'slidele':'360px',
      },


      height:{
        'logo_height': '90px',
        'calced1': 'calc(100vh - 200px)',
      },

      backgroundImage: {
        'header_bg':'url(./assest/img/bg-banner.jpg)',
      },
      spacing: {
        '5.5':'22px',
        '1200': '1200px',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    plugin(function({ addVariant }) {
      addVariant('scrollbar-corner', ['&::-webkit-scrollbar-corner','&::scrollbar-corner'])
    })
  ]
}
