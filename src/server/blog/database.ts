import { env } from '$env/dynamic/private';
import mongoose from 'mongoose';
import { error } from '@sveltejs/kit';
import { createBlogPostModel, type BlogPostRecord } from './model';

export const isBlogConfigured = () => Boolean(env.MONGODB_URI);

export const withBlogDatabase = async <T>(
	operation: (posts: mongoose.Model<BlogPostRecord>) => Promise<T>
): Promise<T> => {
	if (!env.MONGODB_URI) error(503, 'The blog database is not configured.');
	// Workers cannot share TCP sockets between requests. Each operation owns its connection.
	const connection = mongoose.createConnection(env.MONGODB_URI, {
		dbName: env.MONGODB_DB || 'sveltewind',
		maxPoolSize: 1,
		minPoolSize: 0,
		serverSelectionTimeoutMS: 5000
	});
	try {
		try {
			await connection.asPromise();
		} catch {
			// Keep credentials and driver errors out of responses and logs.
			error(503, 'The blog database is temporarily unavailable.');
		}
		return await operation(createBlogPostModel(connection));
	} finally {
		await connection.close();
	}
};
