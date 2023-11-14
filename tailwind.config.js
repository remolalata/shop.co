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
        'featured-style-casual': "url('/images/featured-styles/casual.png')",
        'featured-style-formal': "url('/images/featured-styles/formal.png')",
        'featured-style-party': "url('/images/featured-styles/party.png')",
        'featured-style-gym': "url('/images/featured-styles/gym.png')",
        'newsletter': 'background: linear-gradient(90deg, black 50%, white 50%)'
      },
      backgroundColor: {
        'f2f0f1': '#F2F0F1',
        'discount-pill': '#ff3333',
        'featured-style': '#F0F0F0',
        'footer': '#F0F0F0',
      },
      width: {
        'cta-w': '210px',
        'product': '290px',
        'product-m': '198px',
        'view-all': '218px',
        'footer-information': '300px',
        'newsletter-headline': '550px',
        'newsletter-form-d': '350px'
      },
      height: {
        'banner': '663px',
        'cta-h': '52px',
        'product': '298px',
        'product-m': '200px',
        'view-all': '52px',
        'featured-styles-item': '190px',
        'featured-styles-item-md': '289px'
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
      colors: {
        'discount-pill': '#ff3333',
        'payment-method-border': '#D6DCE5',
        'footer': '#F0F0F0'
      },
      minHeight: {
        'review-item': '256px'
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
