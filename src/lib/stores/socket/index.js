import { writable } from 'svelte/store';

const createStore = () => {
  // destructure store
  const { set, subscribe, update } = writable(undefined);

  // methods
  const emit = (event, data = {}, cb = () => {}) => {
    subscribe(socket => {
      socket.emit(event, data, cb);
    });
  };
  const init = v => set(v);

  return {
    emit,
    init,
    subscribe,
  };
};

export default createStore();
