import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms'), require("tailwind-shades-for-custom-colors"), require("tailwindcss-animate")],
  
  important: '#app',

  safelist: [
    { pattern: /^bg-/, variants: ['hover', 'focus'] },
  ],

  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'sans'
  			],
  			header1: [
  				'Metropolitano-Bold',
  				'sans'
  			],
  			metromed1: [
  				'Metropolitano-Medium',
  				'sans'
  			],
  			metroblack1: [
  				'Metropolitano-Black',
  				'sans'
  			],
  			metrobold1: [
  				'Metropolitano-Bold',
  				'sans'
  			],
  			metrolight1: [
  				'Metropolitano-Light',
  				'sans'
  			],
  			metrothin1: [
  				'Metropolitano-Thin',
  				'sans'
  			],
  			metroreg1: [
  				'Metropolitano-Regular',
  				'sans'
  			],
  			fw100: [
  				'Metropolitano-Thin',
  				'sans'
  			],
  			fw200: [
  				'Metropolitano-Light',
  				'sans'
  			],
  			fw300: [
  				'Metropolitano-Light',
  				'sans'
  			],
  			fw400: [
  				'Metropolitano-Regular',
  				'sans'
  			],
  			fw500: [
  				'Metropolitano-Regular',
  				'sans'
  			],
  			fw600: [
  				'Metropolitano-Bold',
  				'sans'
  			],
  			fw700: [
  				'Metropolitano-Bold',
  				'sans'
  			],
  			fw800: [
  				'Metropolitano-Bold',
  				'sans'
  			],
  			fw900: [
  				'Metropolitano-Black',
  				'sans'
  			],
  			fw950: [
  				'Metropolitano-Black',
  				'sans'
  			]
  		},
  		colors: {
  			primary: '#0a0a0a',
  			primarytext: '#f5f5f5',
  			background: '#0a0a0a',
  			secondary: '#ee2a65',
  			discopink: '#ee2a65',
  			discoteal: '#00AEC7',
  			discopurple: '#642F6C',
  			discoyellow: '#f5f3ee',
  			discored: '#b6103d',
  			discoblue: '#13598f',
  			discogray: '#0a0a0a',
  			discograytwo: '#F5F5F5',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		backgroundPosition: {
  			'right-center': '70% 50%'
  		},
  		animation: {
  			dropIn: 'dropIn 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			dropIn: {
  				'0%': {
  					transform: 'translateY(-100px)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		backgroundImage: {
  			rainbow: 'linear-gradient(90deg, red 0%, orange 14.3%, yellow 28.6%, green 42.9%, blue 57.1%, indigo 71.4%, violet 85.7%, red 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
} satisfies Config;
