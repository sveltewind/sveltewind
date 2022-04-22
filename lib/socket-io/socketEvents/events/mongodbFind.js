// imports
import { connect } from '../../../db/index.js';

export default (io, socket) => {
  socket.on('mongodbFind', async ({ collection }, callback) => {
    console.log('socket.io - mongodbFind');

    // connect to db
    const client = await connect();

    try {
      // find docs in db
      const docs = await client.db().collection(collection).find().toArray();

      callback({ docs });
    } catch (error) {
      callback({ error });
    }
  });
};
