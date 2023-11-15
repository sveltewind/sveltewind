<p align="center">
  <a href="https://sveltewind.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/sveltewind/sveltewind/main/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/sveltewind/sveltewind/main/.github/logo-light.svg">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/sveltewind/sveltewind/main/.github/logo-light.svg" width="350" height="70" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  A utility-first CSS framework for rapidly building custom user interfaces.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/sveltewind"><img src="https://img.shields.io/npm/dt/sveltewind.svg" alt="Total Downloads"></a>
    <a href="https://github.com/sveltewind/sveltewind/releases"><img src="https://img.shields.io/npm/v/sveltewind.svg" alt="Latest Release"></a>
    <a href="https://github.com/sveltewind/sveltewind/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/sveltewind.svg" alt="License"></a>
</p>

---

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
    './node_modules/sveltewind/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {}
    },

  plugins: []
};

module.exports = config;
```
