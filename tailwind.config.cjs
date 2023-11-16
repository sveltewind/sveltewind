import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator'
import Color from 'color';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: tailwindcssPaletteGenerator({
				colors: [Color('#64748b').hue(258).hex()],
				names: ['slate']
			}),
			fontFamily: {
				mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
			}
		}
	},

	plugins: []
};

module.exports = config;
