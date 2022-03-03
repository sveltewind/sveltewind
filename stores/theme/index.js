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
        update(obj => {
          obj[component] = twMerge(obj[component], classes);
          return obj;
        }),
    },
    subscribe,
  };
};

export default init(dream);
