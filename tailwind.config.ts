
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				kahu: {
					'blue': '#59A5D8',
					'light-blue': '#84C5F4',
					'brown': '#8C5E3F',
					'light-brown': '#A67C52',
					'bg-blue': '#E6F3FA',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				heading: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'heart-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-slow': 'fade-in 0.8s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'slide-in-delayed': 'slide-in 0.6s ease-out 0.2s both',
				'heart-float': 'heart-float 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function({ addUtilities }) {
			addUtilities({
				'.backdrop-blur-xs': {
					'backdrop-filter': 'blur(2px)'
				},
				'.backdrop-blur-sm': {
					'backdrop-filter': 'blur(4px)'
				},
				'.backdrop-blur': {
					'backdrop-filter': 'blur(8px)'
				},
				'.backdrop-blur-md': {
					'backdrop-filter': 'blur(12px)'
				},
				'.backdrop-blur-lg': {
					'backdrop-filter': 'blur(16px)'
				},
				'.backdrop-blur-xl': {
					'backdrop-filter': 'blur(24px)'
				},
				'.backdrop-blur-2xl': {
					'backdrop-filter': 'blur(40px)'
				},
				'.backdrop-blur-3xl': {
					'backdrop-filter': 'blur(64px)'
				},
				'.text-shadow-sm': {
					'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)'
				},
				'.text-shadow': {
					'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
				},
				'.text-shadow-md': {
					'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.12)'
				},
				'.text-shadow-lg': {
					'text-shadow': '0 8px 16px rgba(0, 0, 0, 0.15)'
				},
			})
		})
	],
} satisfies Config;
