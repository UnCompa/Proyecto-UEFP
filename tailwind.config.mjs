/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark": "#3C486B",
				"clarity": "#F0F0F0",
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
	plugins: [],
}
