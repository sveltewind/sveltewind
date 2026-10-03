import { error } from '@sveltejs/kit';
import { examples } from '../../../../examples/catalog';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = true;
export const entries: EntryGenerator = () => examples.map((example) => ({ example: example.id }));
export const load: PageServerLoad = ({ params }) => {
	const example = examples.find((example) => example.id === params.example);
	if (!example) error(404, 'Example not found');
	return {
		example,
		related: examples
			.filter((item) => item.kind === example.kind && item.id !== example.id)
			.slice(0, 4)
	};
};
