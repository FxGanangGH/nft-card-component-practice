/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'soft-blue': 'hsl(215, 51%, 70%)',
          cyan: 'hsl(178, 100%, 50%)'
        },
        neutral: {
          'dark-blue-bg': 'hsl(217, 54%, 11%)',
          'dark-blue-card': 'hsl(216, 50%, 16%)',
          'dark-blue-line': 'hsl(215, 32%, 27%)'
        }
      },
      borderRadius: {
        card: '20px',
        image: '10px'
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui']
      },
      maxWidth: {
        'nft-card': '330px'
      }
    }
  },
  plugins: []
}
