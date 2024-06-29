<script lang="ts">
  import { A, Card, Code, Div, H1, H2, H4, Icon, P, SyntaxHighlighter } from '$components/index.js';
  import { ChevronRight } from '$lib/icons/index.js';

  // props
  const steps = [
    {
      h4: 'Create Sveltekit Project',
      p: `Initiate a Sveltekit project with your desired settings<br />( eslint / typescript / playwright / etc. ).`,
      filename: 'Terminal',
      code: `npm create svelte@latest my-app
cd my-app
npm install`,
      options: { lang: 'text' }
    },
    {
      h4: 'Tailwind CSS',
      p: `Add tailwindcss for theme and style customization.`,
      filename: 'Terminal',
      code: `npx svelte-add@latest tailwindcss
npm install`,
      options: { lang: 'text' }
    },
    {
      h4: 'Sveltewind',
      p: `Install Sveltewind in your project.`,
      filename: 'Terminal',
      code: `npm i -D sveltewind
npm install`,
      options: { lang: 'text' }
    },
    {
      h4: 'Update tailwind.config',
      p: `The sveltewind components need to be added to the content field so tailwind knows what classes are being used.`,
      filename: 'tailwind.config.js',
      code: `const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/sveltewind/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {}
  },

  plugins: []
};

module.exports = config;`,
      options: {
        lang: 'typescript',
        decorations: [
          {
            start: { line: 3, character: 0 },
            end: { line: 4, character: 0 },
            properties: { class: 'bg-violet-500/30' }
          }
        ]
      }
    },
    {
      h4: 'Initiate theme',
      p: `Import the theme store into the root +layout.svelte and provide a theme to be applied to your site.`,
      filename: '+layout.svelte',
      code: `<script lang="ts">
  import { theme } from 'sveltewind';
  import { sveltewind } from 'sveltewind/themes';
  import '../app.postcss';

  theme.set(sveltewind);
<\/script>

<slot />`,
      options: {
        lang: 'svelte',
        decorations: [
          {
            start: { line: 1, character: 0 },
            end: { line: 3, character: 0 },
            properties: { class: 'bg-violet-500/30' }
          },
          {
            start: { line: 5, character: 0 },
            end: { line: 6, character: 0 },
            properties: { class: 'bg-violet-500/30' }
          }
        ]
      }
    }
  ];
</script>

<H1 id="installation">Installation</H1>

<Div
  class="grid grid-cols-[fit-content(0px)_1fr] lg:grid-cols-[fit-content(0px)_1fr_fit-content(0px)] gap-x-4 gap-y-8 self-start"
>
  {#each steps as { h4, p, code, filename, options }, i}
    <span>{i + 1}</span>
    <Div class="space-y-4 relative">
      <H4>{h4}</H4>
      <P>{@html p}</P>
    </Div>
    <Div class="col-span-2 lg:col-span-1">
      <Code {code} {filename} {options} />
    </Div>
  {/each}
</Div>

<Div class="flex justify-end">
  <A class="flex items-center space-x-4" href="/docs/getting-started/using-components">
    <span>Using Components</span>
    <Icon class="h-4 w-4" src={ChevronRight} />
  </A>
</Div>
