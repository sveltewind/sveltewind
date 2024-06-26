import { twMerge } from 'tailwind-merge';

let state: { [key: string]: string } = $state({});

export default {
  get: (key: string | undefined) => {
    return key === undefined ? state : state[key];
  },
  set: (key: { [key: string]: string } | string, value?: string | undefined) => {
    if (typeof key !== 'string') state = structuredClone(key);
    if (typeof key === 'string' && typeof value === 'string') state[key] = value;
    return state;
  },
  update: (key: { [key: string]: string } | string, value?: string | undefined) => {
    if (typeof key !== 'string')
      Object.keys(key).forEach(
        (stateKey) => (state[stateKey] = twMerge(state?.[stateKey], key[stateKey]))
      );
    if (typeof key === 'string' && typeof value === 'string')
      state[key] = twMerge(state[key], value);
    return state;
  }
};
