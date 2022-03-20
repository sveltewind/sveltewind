export default (io, socket) => {
	socket.on('disconnect', () => {
		console.log(`socket.io - socket.id '${socket.id}' disconnected`);
	});
};
