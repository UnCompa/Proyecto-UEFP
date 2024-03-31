/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
			}
		},
	},
	darkMode: "class",
	plugins: [animations],
}