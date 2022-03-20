// imports
import { connect } from '../../../db/index.js';

export default (io, socket) => {
  socket.on('mongodbInit', async ({}, callback) => {
    console.log('socket.io - mongodbInit');

    // connect to db
    const client = await connect();

    try {
      let collections = await client.db().listCollections().toArray();

      callback({ collections });
    } catch (error) {
      callback({ error });
    }
  });
};
