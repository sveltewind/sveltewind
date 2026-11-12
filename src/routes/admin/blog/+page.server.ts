import { requireAdmin } from '$server/blog/auth';
import { listAdminPosts } from '$server/blog/posts';
import { isBlogConfigured } from '$server/blog/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	requireAdmin(cookies);
	return {
		configured: isBlogConfigured(),
		posts: isBlogConfigured() ? await listAdminPosts() : []
	};
};
