<script lang="ts">
  import { page } from '$app/stores';
  import * as components from '$lib/components/index.js';
  import { A, Card, Main } from '$lib/components/index.js';
  import { theme } from '$lib/stores/index.js';
  import { sveltewind } from '$lib/themes/index.js';
  import { twMerge } from 'tailwind-merge';
  import '../app.postcss';

  theme.set(sveltewind);
</script>

<div class="flex flex-grow min-h-screen max-h-screen overflow-auto">
  <Card class="overflow-auto rounded-none space-y-4">
    <div class="flex flex-col">
      <div class="font-bold">Components</div>
      {#each Object.keys(components) as componentKey}
        <A
          class={twMerge(
            'shadow-none dark:shadow-none text-slate-700 hover:text-violet-500 focus:text-violet-500 dark:text-slate-300 dark:hover:text-violet-500 dark:focus:text-violet-500',
            $page.url.pathname === `/components/${componentKey.toLowerCase()}`
              ? 'bg-violet-500 text-white hover:bg-violet-500 focus:bg-violet-500 hover:text-white focus:text-white dark:bg-violet-500 dark:text-white dark:hover:bg-violet-500 dark:focus:bg-violet-500 dark:hover:text-white dark:focus:text-white'
              : undefined
          )}
          href="/components/{componentKey.toLowerCase()}"
        >
          {componentKey}
        </A>
      {/each}
    </div>
  </Card>
  <Main>
    <slot />
  </Main>
</div>
