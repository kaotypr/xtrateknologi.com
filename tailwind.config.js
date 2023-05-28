// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        10: '#96E5FF',
        20: '#73DCFF',
        30: '#43D0FF',
        40: '#22C8FF',
        50: '#00BFFF',
        60: '#00ACE6',
        70: '#009DD1',
        80: '#0092C2',
        90: '#0079A2',
        100: '#006385',
      },
      dark: {
        80: ' #404040',
        100: '#171717',
      },
      ...colors,
    },
  },
  plugins: [],
}
