import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms'), require("tailwind-shades-for-custom-colors")],
  
  important: '#app',

  safelist: [
    { pattern: /^bg-/, variants: ['hover', 'focus'] },
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['sans'],
        header1: ['Metropolitano-Bold', 'sans'],
        facet1: ['FacetUltra-Regular', 'sans'],
        nohemiblack1: ['Nohemi-Black', 'sans'],
        rgstandardbold1: ['RG-StandardBold', 'sans'],
        metromed1: ['Metropolitano-Medium', 'sans'],
        metroblack1: ['Metropolitano-Black', 'sans'],
        metrobold1: ['Metropolitano-Bold', 'sans'],
        metrolight1: ['Metropolitano-Light', 'sans'],
        metrothin1: ['Metropolitano-Thin', 'sans'],
        metroreg1: ['Metropolitano-Regular', 'sans'],
        neonlight: ['neon-light', 'sans'],
        fw100: ['Metropolitano-Thin', 'sans'],
        fw200: ['Metropolitano-Light', 'sans'],
        fw300: ['Metropolitano-Light', 'sans'],
        fw400: ['Metropolitano-Regular', 'sans'],
        fw500: ['Metropolitano-Regular', 'sans'],
        fw600: ['Metropolitano-Bold', 'sans'],
        fw700: ['Metropolitano-Bold', 'sans'],
        fw800: ['Metropolitano-Bold', 'sans'],
        fw900: ['Metropolitano-Black', 'sans'],
        fw950: ['Metropolitano-Black', 'sans'],
      },
      colors: {
        primary: '#163e63',
        secondary: '#c65364',
        discopink: '#c65364',
        discoteal: '#0ea288',
        discopurple: '#8002E4',
        discoyellow: '#fef3c7',
        discored: '#b6103d',
        discoblue: '#163e63',
        discogray: '#000000',
        discograytwo: '#F5F5F5',
      },
      animation: {
        dropIn: 'dropIn 0.2s ease-out',
      },
      keyframes: {
        dropIn: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'rainbow': 'linear-gradient(90deg, red 0%, orange 14.3%, yellow 28.6%, green 42.9%, blue 57.1%, indigo 71.4%, violet 85.7%, red 100%)',
      },
    },
  },
} satisfies Config;
