// _imports
import { writable } from 'svelte/store';
import { twMerge } from 'tailwind-merge';
import { dream } from '../../themes/index.js';

const init = theme => {
  // destructure methods
  const { subscribe, update } = writable(theme);

  return {
    set: {
      component: ({ component, classes }) =>
        update(state => {
          state[component] = twMerge(state[component], classes);
          return state;
        }),
    },
    subscribe,
    update: obj =>
      update(state => {
        Object.keys(obj).forEach(
          key => (state[key] = twMerge(state?.[key], obj[key])),
        );
        return state;
      }),
  };
};

export default init(dream);
