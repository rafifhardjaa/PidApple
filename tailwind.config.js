/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			colors: {
				ink: '#1D1D1F',
				muted: '#86868B',
				surface: '#F5F5F7',
				accent: '#007AFF',
				whatsapp: '#25D366'
			},
			maxWidth: {
				shell: '1120px'
			},
			lineHeight: {
				// design.md: heading leading 1.05
				tight: '1.05'
			},
			transitionTimingFunction: {
				apple: 'cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: []
};
