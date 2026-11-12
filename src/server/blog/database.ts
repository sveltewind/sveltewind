import { env } from '$env/dynamic/private';
import mongoose from 'mongoose';
import { error } from '@sveltejs/kit';

let pending: Promise<typeof mongoose> | undefined;

export function isBlogConfigured() {
	return Boolean(env.MONGODB_URI);
}

export async function connectBlogDatabase() {
	if (!env.MONGODB_URI) error(503, 'The blog database is not configured.');
	if (mongoose.connection.readyState === 1) return mongoose;
	if (!pending) {
		pending = mongoose.connect(env.MONGODB_URI, {
			dbName: env.MONGODB_DB || 'sveltewind',
			maxPoolSize: 10,
			serverSelectionTimeoutMS: 5000
		});
	}
	try {
		return await pending;
	} catch {
		// Keep credentials and driver errors out of responses and logs.
		error(503, 'The blog database is temporarily unavailable.');
	} finally {
		pending = undefined;
	}
}
