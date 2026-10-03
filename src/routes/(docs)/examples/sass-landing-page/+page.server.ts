import { redirect } from '@sveltejs/kit';

export const prerender = true;
export const load = () => redirect(308, '/examples/saas-landing-page');
