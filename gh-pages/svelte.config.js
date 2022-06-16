import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV !== 'production' ? '' : ''
		},
		prerender: {
			default: true
		},
		vite: {
			optimizeDeps: {
				exclude: ['@steeze-ui/svelte-icon']
			},
			resolve: {
				alias: {
					'@actions': path.resolve('../actions'),
					'@components': path.resolve('../components')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
