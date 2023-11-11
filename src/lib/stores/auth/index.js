import { get, writable } from 'svelte/store';
import socketStore from '../socket/index.js';

const createStore = () => {
  // initiate value
  let value;

  // check if value exists or not
  if (typeof localStorage !== 'undefined')
    value = JSON.parse(localStorage.getItem('token') || JSON.stringify(''));
  if (typeof localStorage === 'undefined') value = '';

  // destructure store
  let { set } = writable(value);

  // methods
  set = token => localStorage.setItem('token', JSON.stringify(token));
  const signOut = () => localStorage.setItem('token', JSON.stringify(''));
  const token = () => JSON.parse(localStorage.getItem('token'));
  const verify = async () => {
    // get socket from store
    const socket = get(socketStore);

    // initiate verified variable
    let verified = false;

    // create promise
    await new Promise(res => {
      // emit to server
      socket.emit(
        'authVerify',
        { token: JSON.parse(localStorage.getItem('token')) },
        ({ error, token }) => {
          if (error) localStorage.setItem('token', JSON.stringify(''));
          if (token) {
            set(token);
            verified = true;
          }
          res();
        },
      );
    });
    return verified;
  };

  if (typeof localStorage !== 'undefined') {
    return {
      set,
      signOut,
      token,
      verify,
    };
  }
};

export default createStore();
