import type { Component } from 'svelte';
import type { PageLoad } from './$types';

const previews = import.meta.glob<{ default: Component }>('/src/examples/previews/*.svelte');
const sources = import.meta.glob<string>('/src/examples/previews/*.svelte', {
	query: '?raw',
	import: 'default'
});

export const load: PageLoad = async ({ data }) => {
	const path = `/src/examples/previews/${data.example.id}.svelte`;
	const [preview, source] = await Promise.all([previews[path](), sources[path]()]);
	return {
		...data,
		Preview: preview.default,
		source: source.replace("from '$lib/components'", "from 'sveltewind/components'")
	};
};
