/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        P10: "#F5F5F5",
        P50: "#EEECF4",
        P100: "#B2B2B2",
        P200: "#616161",
        P300: "#543F92",
        P400: '#536471',
        GL100: '#B1DEDA',
        GL300: '#78C6BF',
        BL100:'#90BFFF',
        BL300: '#4090FF',
        B10: '#383838',
        B30: '#EBEBEB',
        B40: '#BDBDBD',
        B50: '#9E9E9E',
        B70: '#A3A3A3',
        B80: '#49454F',
        B90: '#858585',
        B200: '#666666',
        B300: '#575757',
        B400: '#212121',
        B500: '#3B3B3B',
        R100: '#B3261E',
        R200: '#ea4335',
        R300: '#FF4B64',
        O300: '#FFA046',
        O350: '#FE6845',
        G300: '#9EC245',
      },
      spacing: {
        32.5: '8.5rem',
        90: '23rem',
        98: '26rem',
        99: '28rem',
        99.5: '29rem',
        100: '30rem',
        105: '32rem',
        110: '35rem',
        120: '36rem',
        130: '38rem',
        150: '40rem',
        152: '50rem',
        1000: '62.5rem',
        1200: '76.25rem',
      },
      transitionDuration: {
        '2000': '2000ms'
      },
      boxShadow: {
        '3xl': '24px 12px 24px rgba(0, 0, 0, 0.25)'
      },
      variants: {
        scrollbar: ['rounded']
    }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
],
};
