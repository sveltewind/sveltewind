import { get, writable } from 'svelte/store';
import socket from '../socket/index.js';

const createStore = () => {
  // destructure store
  let { set, subsribe, update } = writable({});

  // methods
  const init = async () => {
    await new Promise(res => {
      socket.emit('mongodbInit', {}, ({ error, collections }) => {
        console.log({ error, collections });
        res();
      });
    });
  };

  return {
    init,
    subsribe,
  };
};

export default createStore();
