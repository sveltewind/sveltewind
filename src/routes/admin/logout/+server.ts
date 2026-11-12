import { deleteAdminSession } from '$server/blog/auth';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies, request, url }) => {
	if (request.headers.get('origin') !== url.origin) error(403, 'Invalid request origin.');
	deleteAdminSession(cookies);
	redirect(303, '/admin/login');
};
