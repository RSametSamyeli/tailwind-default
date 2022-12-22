/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
        sm: '1rem',
        lg: '1rem',
        xl: '2.5rem',
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
      },

      flex: {
        'half': ' 0 0 50%',
      },

      colors:{
        'primary': '#B40A17',
        'primary-accent': '#A20915',
        'secondary': '#0D52C1',
        'secondary-light': '#CFDCF3',
        'secondary-lighter': '#E7EEF9',
        'high-emphasis': '#262626',
        'medium-emphasis': '##595959',
        'success-lighter': '#EAF6F0',
        'success-accent': '##26905E',
        'warning-accent': '#D97701',
        'light': '#EFEFEF',
        'border': '#CFD8DC',
        'gradient-burgundy': '#B40A17',
        'gradient-red': '#D13F4A',
        'warning-lighter': '#FEF3E6',
        'warning-accent': '#D97701',

      },
      shadow:{
        'card': '0px 6px 20px -4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
