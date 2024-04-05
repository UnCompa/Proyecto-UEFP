/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import { nextui } from "@nextui-org/react"
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'radial-gradient-light': 'radial-gradient(circle closest-corner at 50% 100%, #fcb045, #fd1d1d99, #FFFFFF 100%)',
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
	plugins: [animations,nextui()],
}