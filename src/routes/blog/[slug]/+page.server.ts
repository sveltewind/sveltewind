import { getPublishedPost } from '$server/blog/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => ({
	post: await getPublishedPost(params.slug)
});
