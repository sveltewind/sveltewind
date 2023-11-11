# sveltewind

## Installation

```bash
# create a new project
npm create svelte@latest

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
