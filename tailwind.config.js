/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'pastel-pink': '#FFD3E0',
				'pastel-yellow': '#FFF3C1',
				'pastel-blue': '#C3E1E5',
				'pastel-lavender': '#E2C2FF',
				'pastel-peach': '#FFCAC3',
				'footer-pastel-pink': '#FFD3E0',
				'navbar-pastel-green': '#5BD5B8',
			},
			keyframes: {
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
			animation: {
				'spin-slow': 'spin-slow 2s linear infinite',
			},
			animations: {
				loading: 'loading 5s linear',
			},
		},
	},
	plugins: [],
};
