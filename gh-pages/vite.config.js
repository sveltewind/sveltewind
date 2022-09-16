import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $actions: resolve('../actions'),
      $components: resolve('../components')
    }
  },
  ssr: {
    noExternal: [/^@steeze-ui\//]
  }
};

export default config;
