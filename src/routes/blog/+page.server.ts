import { error } from '@sveltejs/kit';
import { listPublishedPosts } from '$server/blog/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	if (!Number.isSafeInteger(page) || page < 1 || page > 10000) error(400, 'Invalid page.');
	return { ...(await listPublishedPosts(page)), page };
};
