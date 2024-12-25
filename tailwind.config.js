/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#4db4af',
				hoverText: '#fa983a',
			},
			textColor: {
				primary: '#34495e',
			},
		},
	},
	plugins: [],
};
