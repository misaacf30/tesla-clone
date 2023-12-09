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
