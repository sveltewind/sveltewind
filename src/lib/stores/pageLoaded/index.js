// imports
import { writable } from 'svelte/store';

// items to
const items = {
  __layout: false,
  mongodb: false,
  socket: false,
};

export default writable(items);
