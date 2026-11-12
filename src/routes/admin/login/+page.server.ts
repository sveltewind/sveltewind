import { fail, redirect } from '@sveltejs/kit';
import {
	authenticateAdmin,
	createAdminSession,
	hasAdminSession,
	isAdminConfigured
} from '$server/blog/auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	if (hasAdminSession(cookies)) redirect(303, '/admin/blog');
	return { configured: isAdminConfigured() };
};

export const actions: Actions = {
	default: async ({ request, cookies, getClientAddress }) => {
		const form = await request.formData();
		const key = form.get('key');
		if (typeof key !== 'string' || key.length > 1000 || !authenticateAdmin(key, getClientAddress()))
			return fail(401, { message: 'Invalid admin access key.' });
		createAdminSession(cookies);
		redirect(303, '/admin/blog');
	}
};
