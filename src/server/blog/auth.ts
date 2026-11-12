import { env } from '$env/dynamic/private';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { dev } from '$app/environment';
import { error, redirect, type Cookies } from '@sveltejs/kit';

const cookieName = 'sveltewind_blog_admin';
const lifetime = 8 * 60 * 60;
const attempts = new Map<string, { count: number; expires: number }>();

export function isAdminConfigured() {
	return (env.BLOG_ADMIN_KEY?.length ?? 0) >= 32 && (env.BLOG_SESSION_SECRET?.length ?? 0) >= 32;
}

function digest(value: string) {
	return createHash('sha256').update(value).digest();
}

function signature(payload: string) {
	return createHmac('sha256', env.BLOG_SESSION_SECRET!)
		.update(payload)
		.update(digest(env.BLOG_ADMIN_KEY!))
		.digest('hex');
}

export function authenticateAdmin(key: string, address: string) {
	if (!isAdminConfigured()) error(503, 'Blog admin credentials are not configured.');
	const now = Date.now();
	for (const [ip, attempt] of attempts) if (attempt.expires <= now) attempts.delete(ip);
	if (attempts.size >= 1000 && !attempts.has(address)) error(429, 'Please try again later.');
	const attempt = attempts.get(address) ?? { count: 0, expires: now + 15 * 60 * 1000 };
	if (attempt.count >= 5) error(429, 'Too many sign-in attempts. Try again in 15 minutes.');
	attempt.count++;
	attempts.set(address, attempt);
	const valid = timingSafeEqual(digest(key), digest(env.BLOG_ADMIN_KEY!));
	if (valid) attempts.delete(address);
	return valid;
}

export function hasAdminSession(cookies: Cookies) {
	if (!isAdminConfigured()) return false;
	const token = cookies.get(cookieName);
	if (!token || token.length > 200) return false;
	const match = /^v1\.(\d+)\.([a-f0-9]{64})$/.exec(token);
	if (!match) return false;
	const expires = Number(match[1]);
	const now = Math.floor(Date.now() / 1000);
	if (!Number.isSafeInteger(expires) || expires <= now || expires > now + lifetime) return false;
	return timingSafeEqual(
		Buffer.from(match[2], 'hex'),
		Buffer.from(signature(`v1.${expires}`), 'hex')
	);
}

export function requireAdmin(cookies: Cookies) {
	if (!hasAdminSession(cookies)) redirect(303, '/admin/login');
}

export function createAdminSession(cookies: Cookies) {
	const payload = `v1.${Math.floor(Date.now() / 1000) + lifetime}`;
	cookies.set(cookieName, `${payload}.${signature(payload)}`, {
		path: '/admin',
		httpOnly: true,
		secure: !dev,
		sameSite: 'strict',
		maxAge: lifetime
	});
}

export function deleteAdminSession(cookies: Cookies) {
	cookies.delete(cookieName, { path: '/admin' });
}
