/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				accent: '#1890ff',
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
