export default (io, socketEvents) => {
	io.on('connection', (socket) => socketEvents(io, socket));
};
