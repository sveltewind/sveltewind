import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		prerender: {
			// Preserve existing demo content; fail on any unrelated missing resource.
			handleHttpError: ({ status, path, message }) => {
				if (status === 404 && path === '/example-video.mp4') {
					console.warn(message);
					return;
				}
				throw new Error(message);
			},
			handleMissingId: ({ path, id, message }) => {
				// These existing section IDs are assigned by the docs layout in the browser.
				const browserAnchors = {
					'/getting-started/theming': ['create-your-own-theme', 'set'],
					'/getting-started/usage': [
						'composing-styles-across-components',
						'visibility',
						'transitions'
					]
				};
				if (browserAnchors[path]?.includes(id)) {
					console.warn(message);
					return;
				}
				throw new Error(message);
			},
			handleUnseenRoutes: ({ routes, message }) => {
				// This existing empty placeholder has no concrete URLs to prerender.
				if (routes.every((route) => route === '/(docs)/components/[component]')) {
					console.warn(message);
					return;
				}
				throw new Error(message);
			}
		},
		alias: {
			$attachments: 'src/attachments',
			$components: 'src/components',
			$state: 'src/state'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
