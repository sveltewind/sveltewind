import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const sourceFileSchema = new Schema(
	{
		name: { type: String, required: true, maxlength: 200 },
		contents: { type: String, required: true, maxlength: 200000 }
	},
	{ _id: false }
);

const postSchema = new Schema(
	{
		title: { type: String, required: true, trim: true, maxlength: 160 },
		slug: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			maxlength: 200
		},
		excerpt: { type: String, default: '', maxlength: 500 },
		body: { type: String, default: '', maxlength: 200000 },
		tags: { type: [String], default: [] },
		status: { type: String, enum: ['draft', 'published'], default: 'draft', required: true },
		publishedAt: { type: Date, default: null },
		example: {
			entry: { type: String, default: 'App.svelte' },
			files: { type: [sourceFileSchema], default: [] },
			svelteVersion: { type: String, default: '' },
			sveltewindVersion: { type: String, default: '' }
		}
	},
	{ timestamps: true, bufferCommands: false }
);
postSchema.index({ status: 1, publishedAt: -1, _id: -1 });

export type BlogPostRecord = InferSchemaType<typeof postSchema>;
export const BlogPost: mongoose.Model<BlogPostRecord> =
	(mongoose.models.BlogPost as mongoose.Model<BlogPostRecord> | undefined) ??
	mongoose.model<BlogPostRecord>('BlogPost', postSchema);
