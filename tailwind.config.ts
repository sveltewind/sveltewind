import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				slate: {
					'50': '#faf9fb',
					'100': '#f1f0f4',
					'200': '#e4e1ea',
					'300': '#cecad8',
					'400': '#9d95b2',
					'500': '#70658b',
					'600': '#4e4762',
					'700': '#393347',
					'800': '#211e29',
					'900': '#110f15',
					'950': '#09090c'
				}
			},
			fontFamily: {
				mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
				sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system']
			}
		}
	},

	plugins: []
} as Config;
