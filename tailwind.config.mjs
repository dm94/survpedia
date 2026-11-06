/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				paper: {
					DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
					sunken: 'rgb(var(--paper-sunken) / <alpha-value>)',
				},
				ink: {
					DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
					muted: 'rgb(var(--ink-muted) / <alpha-value>)',
				},
				rule: {
					DEFAULT: 'rgb(var(--rule) / <alpha-value>)',
					strong: 'rgb(var(--rule-strong) / <alpha-value>)',
				},
				accent: 'rgb(var(--accent) / <alpha-value>)',
			},
			fontFamily: {
				read: ['var(--font-read)'],
				data: ['var(--font-data)'],
			},
			maxWidth: {
				measure: '68ch',
			},
			transitionTimingFunction: {
				manual: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
