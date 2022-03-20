// imports
import * as events from './events/index.js';

export default (io, socket) => {
	console.log('socket.io - connection');

	Object.values(events).forEach((event) => {
		event(io, socket);
	});
};
