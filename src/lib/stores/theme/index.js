// _imports
import { writable } from 'svelte/store';
import { twMerge } from 'tailwind-merge';

const init = theme => {
  // destructure methods
  const { subscribe, update } = writable(theme);

  return {
    set: obj =>
      update(state => {
        Object.keys(obj).forEach(
          key => (state[key] = twMerge(state?.[key], obj[key])),
        );
        return state;
      }),
    subscribe,
  };
};

export default init({});
