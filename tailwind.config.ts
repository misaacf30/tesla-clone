import { transform } from 'next/dist/build/swc'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '100'
          }
        },
        slideInUp: {
          'from': {
            transform: 'translateY(100%)',
            opacity: '0%'
          },
          'to': {
            transform: 'translateY(0%)',
            opacity: '100%'
          }
        },
        slideInDown: {
          'from': {
            transform: 'translateY(-100%)',
            opacity: '0%'
          },
          'to': {
            transform: 'translateY(0%)',
            opacity: '100%'
          }
        },
        slideInRight: {
          'from': {
            transform: 'translateX(-100%)',
            opacity: '0%'
          },
          'to': {
            transform: 'translateX(0%)',
            opacity: '100%'
          }
        },
        slideInLeft: {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0%'
          },
          'to': {
            transform: 'translateX(0%)',
            opacity: '100%'
          }
        }
      },
    },
    screens: {
      'sm': '450px',
      'md': '650px',
      'lg': '900px',
      'xl': '1200px',
      '2xl': '1450px',
    }
  },
  plugins: [],
}
export default config
