/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'f2f0f1': '#F2F0F1'
      },
      height: {
        'banner': '663px',
        'cta-h': '52px',
        'product': '298px'
      },
      fontFamily: {
        'integral-bold': 'Integral Bold',
        'satoshi-medium': 'Satoshi Medium',
        'satoshi-bold': 'Satoshi Bold'
      },
      maxWidth: {
        'banner-content': '577px'
      },
      fontSize: {
        'banner-heading': ['64px', '64px'],
        '40px': '40px'
      },
      width: {
        'cta-w': '210px',
        'product': '295px'

      }
    },
    container: {
      center: true,
      screens: {
        'lg': '1240px'
      },
      padding: {
        'default': '20px',
        'sm': '20px',
        'lg': '0'
      }
    }
  },
  plugins: [],
}
