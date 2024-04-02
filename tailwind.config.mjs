/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'radial-gradient-light': 'radial-gradient(circle closest-corner at 50% 100%, #00F0FF, #0500FF99, #FFFFFF 100%)',
				'radial-gradient-dark': 'radial-gradient(circle closest-corner at 50% 100%, #FFC700, #FF000077, #000000 100%)',
			  }),
			colors: {
				"dark": "(--bkg-dark)",
				"clarity": "(--bkg-white)",
				"acent-1": "#F9D949",
				"acent-2": "#F45050",
			},
			fontFamily: {
				"Noto-Sans" : ["Noto Sans", "sans-serif"],
				"Rubik": ["Rubik", "sans-serif"],
				"Kanit": ["Kanit", "sans-serif"]
			},
		},
	},
	darkMode: "class",
	plugins: [animations],
}