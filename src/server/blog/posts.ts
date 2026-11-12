import { error } from '@sveltejs/kit';
import { isValidObjectId } from 'mongoose';
import { VERSION, compile } from 'svelte/compiler';
import { withBlogDatabase, isBlogConfigured } from './database';
import packageJson from '../../../package.json';

export type PostInput = {
	title: string;
	slug: string;
	excerpt: string;
	body: string;
	tags: string;
	source: string;
};

export const readPostInput = (form: FormData): PostInput => {
	const text = (name: string) => {
		const value = form.get(name);
		return typeof value === 'string' ? value : '';
	};
	return {
		title: text('title').trim(),
		slug: text('slug').trim(),
		excerpt: text('excerpt').trim(),
		body: text('body'),
		tags: text('tags'),
		source: text('source')
	};
};

export const validatePost = (input: PostInput, publish: boolean) => {
	if (!input.title || input.title.length > 160) return 'Enter a title of up to 160 characters.';
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input.slug) || input.slug.length > 200)
		return 'Use a slug with lowercase letters, numbers, and single hyphens.';
	if (input.excerpt.length > 500) return 'Keep the excerpt under 500 characters.';
	if (input.body.length > 200000 || input.source.length > 200000)
		return 'The article or source is too large.';
	if (
		input.tags.split(',').filter((tag) => tag.trim()).length > 10 ||
		input.tags.split(',').some((tag) => tag.trim().length > 40)
	)
		return 'Use up to 10 tags, each under 40 characters.';
	if (publish && !input.body.trim()) return 'Add article content before publishing.';
	if (publish && input.source.trim()) {
		try {
			compile(input.source, { filename: 'App.svelte', generate: 'client' });
		} catch {
			return 'Fix the Svelte syntax before publishing. You can still save a draft.';
		}
	}
	return null;
};

const published = () => ({ status: 'published' as const, publishedAt: { $lte: new Date() } });

export const listPublishedPosts = async (page = 1) => {
	if (!isBlogConfigured()) return { posts: [], hasMore: false };
	return withBlogDatabase(async (BlogPost) => {
		const records = await BlogPost.find(published())
			.select('title slug excerpt tags publishedAt')
			.sort({ publishedAt: -1, _id: -1 })
			.skip((page - 1) * 12)
			.limit(13)
			.lean();
		return {
			posts: records.slice(0, 12).map((post) => ({
				title: post.title,
				slug: post.slug,
				excerpt: post.excerpt,
				tags: post.tags,
				publishedAt: post.publishedAt!.toISOString()
			})),
			hasMore: records.length > 12
		};
	});
};

export const getPublishedPost = async (slug: string) => {
	if (!isBlogConfigured()) error(404, 'Post not found.');
	return withBlogDatabase(async (BlogPost) => {
		const post = await BlogPost.findOne({ ...published(), slug }).lean();
		if (!post) error(404, 'Post not found.');
		return {
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			body: post.body,
			tags: post.tags,
			publishedAt: post.publishedAt!.toISOString(),
			example: post.example
		};
	});
};

export const listAdminPosts = async () => {
	return withBlogDatabase(async (BlogPost) => {
		const posts = await BlogPost.find()
			.select('title slug status updatedAt')
			.sort({ updatedAt: -1 })
			.limit(100)
			.lean();
		return posts.map((post) => ({
			id: String(post._id),
			title: post.title,
			slug: post.slug,
			status: post.status,
			updatedAt: post.updatedAt.toISOString()
		}));
	});
};

export const getAdminPost = async (id: string) => {
	if (!isValidObjectId(id)) error(404, 'Post not found.');
	return withBlogDatabase(async (BlogPost) => {
		const post = await BlogPost.findById(id).lean();
		if (!post) error(404, 'Post not found.');
		return {
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			body: post.body,
			tags: post.tags.join(', '),
			source: post.example?.files[0]?.contents ?? '',
			status: post.status
		};
	});
};

export const savePost = async (id: string, input: PostInput, publish: boolean) => {
	return withBlogDatabase(async (BlogPost) => {
		await BlogPost.init();
		if (id !== 'new' && !isValidObjectId(id)) error(404, 'Post not found.');
		const post = id === 'new' ? new BlogPost() : await BlogPost.findById(id);
		if (!post) error(404, 'Post not found.');
		post.set({
			title: input.title,
			slug: input.slug,
			excerpt: input.excerpt,
			body: input.body,
			tags: [
				...new Set(
					input.tags
						.split(',')
						.map((tag) => tag.trim())
						.filter(Boolean)
				)
			],
			status: publish ? 'published' : 'draft',
			publishedAt: publish ? (post.publishedAt ?? new Date()) : null,
			example: {
				entry: 'App.svelte',
				files: input.source.trim() ? [{ name: 'App.svelte', contents: input.source }] : [],
				svelteVersion: VERSION,
				sveltewindVersion: packageJson.version
			}
		});
		await post.save();
		return String(post._id);
	});
};
