import { requireAdmin } from '$server/blog/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies, setHeaders }) => {
	setHeaders({ 'cache-control': 'private, no-store' });
	requireAdmin(cookies);
};
