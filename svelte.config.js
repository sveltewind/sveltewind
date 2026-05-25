import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			$attachments: 'src/attachments',
			$components: 'src/components',
			$state: 'src/state'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
