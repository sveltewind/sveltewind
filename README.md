# sveltewind

## Installation

```bash
# create a new project
npm init svelte

# add tailwindcss
npx svelte-add@latest tailwindcss

# install svelte packages
npm i

# install sveltewind
npm i -D sveltewind
```

```javascript
// tailwind.config.cjs
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/sveltewind/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;
```

```javascript
// svelte.config.js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      optimizeDeps: {
        include: ['hashlru'],
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
```
