// imports
import { ObjectId } from 'mongodb';
import { connect } from '../../../db/index.js';
import { sign, verify } from '../../../jwt/index.js';

export default (io, socket) => {
	socket.on('authVerify', async ({ token }, callback) => {
		console.log('socket.io - authVerify');

		// connect to db
		const client = await connect();

		try {
			// verify token
			const _id = await verify(token);

			// find _id in db
			const user = await client
				.db()
				.collection('users')
				.findOne({ _id: ObjectId(_id), status: { $ne: 'terminated' } });

			// error if user is null
			if (user === null) throw 'Could not verify user.';

			// update token
			token = await sign(_id);

			callback({ token });
		} catch (error) {
			callback({ error });
		}
	});
};
