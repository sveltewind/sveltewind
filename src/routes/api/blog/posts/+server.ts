import { error, json } from '@sveltejs/kit';
import { listPublishedPosts } from '$server/blog/posts';
import type { RequestHandler } from './$types';

export const prerender = false;
export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	if (!Number.isSafeInteger(page) || page < 1 || page > 10000) error(400, 'Invalid page.');
	return json({ ...(await listPublishedPosts(page)), page });
};
