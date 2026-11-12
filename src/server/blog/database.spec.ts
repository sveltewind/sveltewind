import { beforeEach, describe, expect, it, vi } from 'vitest';
import mongoose from 'mongoose';
import { createBlogPostModel } from './model';
import { withBlogDatabase } from './database';

vi.mock('$env/dynamic/private', () => ({ env: { MONGODB_URI: 'mongodb://test.invalid/blog' } }));
vi.mock('mongoose', () => ({ default: { createConnection: vi.fn() } }));
vi.mock('./model', () => ({ createBlogPostModel: vi.fn() }));

const connection = () => ({ asPromise: vi.fn().mockResolvedValue(undefined), close: vi.fn() });

describe('Worker database connection lifecycle', () => {
	beforeEach(() => vi.resetAllMocks());

	it('closes the connection after returning query results', async () => {
		const client = connection();
		vi.mocked(mongoose.createConnection).mockReturnValue(client as never);
		const query = vi.fn().mockResolvedValue(['post']);
		await expect(withBlogDatabase(query)).resolves.toEqual(['post']);
		expect(createBlogPostModel).toHaveBeenCalledWith(client);
		expect(client.close).toHaveBeenCalledOnce();
	});

	it('preserves query errors and still closes the connection', async () => {
		const client = connection();
		vi.mocked(mongoose.createConnection).mockReturnValue(client as never);
		const duplicate = Object.assign(new Error('Duplicate slug'), { code: 11000 });
		await expect(withBlogDatabase(() => Promise.reject(duplicate))).rejects.toBe(duplicate);
		expect(client.close).toHaveBeenCalledOnce();
	});

	it('hides connection errors and cleans up failed connections', async () => {
		const client = connection();
		client.asPromise.mockRejectedValue(new Error('Private driver details'));
		vi.mocked(mongoose.createConnection).mockReturnValue(client as never);
		await expect(withBlogDatabase(vi.fn())).rejects.toMatchObject({
			status: 503,
			body: { message: 'The blog database is temporarily unavailable.' }
		});
		expect(client.close).toHaveBeenCalledOnce();
	});

	it('does not share connections between concurrent operations', async () => {
		const first = connection();
		const second = connection();
		vi.mocked(mongoose.createConnection)
			.mockReturnValueOnce(first as never)
			.mockReturnValueOnce(second as never);
		await Promise.all([
			withBlogDatabase(() => Promise.resolve('first')),
			withBlogDatabase(() => Promise.resolve('second'))
		]);
		expect(mongoose.createConnection).toHaveBeenCalledTimes(2);
		expect(first.close).toHaveBeenCalledOnce();
		expect(second.close).toHaveBeenCalledOnce();
	});
});
