import { fail, isHttpError, redirect } from '@sveltejs/kit';
import { requireAdmin } from '$server/blog/auth';
import { getAdminPost, readPostInput, savePost, validatePost } from '$server/blog/posts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, params }) => {
	requireAdmin(cookies);
	return {
		post:
			params.id === 'new'
				? { title: '', slug: '', excerpt: '', body: '', tags: '', source: '', status: 'draft' }
				: await getAdminPost(params.id)
	};
};

export const actions: Actions = {
	default: async ({ cookies, request, params }) => {
		requireAdmin(cookies);
		const form = await request.formData();
		const values = readPostInput(form);
		const intent = form.get('intent');
		if (intent !== 'draft' && intent !== 'publish')
			return fail(400, { message: 'Invalid save action.', values });
		const message = validatePost(values, intent === 'publish');
		if (message) return fail(400, { message, values });
		let id: string;
		try {
			id = await savePost(params.id, values, intent === 'publish');
		} catch (cause) {
			if (typeof cause === 'object' && cause !== null && 'code' in cause && cause.code === 11000)
				return fail(409, { message: 'That slug is already in use.', values });
			if (isHttpError(cause) && cause.status < 500) throw cause;
			return fail(503, {
				message: 'Unable to save right now. Your text is preserved; please try again.',
				values
			});
		}
		redirect(303, `/admin/blog/${id}?saved=1`);
	}
};
