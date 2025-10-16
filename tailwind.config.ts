import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// shadcn/ui colors - complete set
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				// Terminal dark theme colors
				terminal: {
					bg: '#0a0a0a',
					bgSecondary: '#111111',
					bgTertiary: '#1a1a1a',
					text: '#00ff00', // Matrix green
					textSecondary: '#00cccc', // Cyan
					textMuted: '#666666',
					accent: '#00ff00',
					accentSecondary: '#00cccc',
					border: '#333333',
					glow: '#00ff0040', // Green glow
				},
				// Additional terminal colors
				matrix: {
					50: '#f0fff0',
					100: '#ccffcc',
					200: '#99ff99',
					300: '#66ff66',
					400: '#33ff33',
					500: '#00ff00', // Main matrix green
					600: '#00cc00',
					700: '#009900',
					800: '#006600',
					900: '#003300',
				},
				cyan: {
					50: '#f0ffff',
					100: '#ccffff',
					200: '#99ffff',
					300: '#66ffff',
					400: '#33ffff',
					500: '#00cccc', // Main cyan
					600: '#00aaaa',
					700: '#008888',
					800: '#006666',
					900: '#004444',
				},
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'cursor-blink': 'cursor-blink 1s infinite',
				typewriter: 'typewriter 2s steps(40) 1s forwards',
				'fade-in': 'fade-in 0.5s ease-in-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
				scanline: 'scanline 2s linear infinite',
			},
			keyframes: {
				'cursor-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' },
				},
				typewriter: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
					'100%': { boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
				},
				scanline: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
			backgroundImage: {
				'grid-pattern':
					'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
				scanline: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
			},
			backgroundSize: {
				grid: '20px 20px',
				scanline: '100% 4px',
			},
		},
	},
	plugins: [],
};
export default config;
