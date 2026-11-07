/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		container: false
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['General Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			colors: {
				ink: '#1D1D1F',
				muted: '#6E6E73',
				surface: '#F5F5F7',
				accent: '#0066CC'
			},
			transitionTimingFunction: {
				apple: 'cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: []
};
