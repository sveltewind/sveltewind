<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { A, Button, H1 } from '$lib/components';
  import { theme } from '$lib/stores';
  import * as Icons from '../../Icons';
  import Code from './Code/index.svelte';

  // text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white
</script>

<div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
  <H1
    class="text-slate-900 dark:text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
  >
    A svelte(kit) UI library focusing heavily on tailwindcss
  </H1>
  <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
    A utility-first CSS framework packed with classes like
    <Code>flex</Code>,
    <Code>pt-4</Code>,
    <Code>text-center</Code>
    and
    <Code>rotate-90</Code>
    that can be composed to build any design, directly in your markup.
  </p>
  <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
    <A class={twMerge($theme.button, 'w-full sm:w-auto')} href="/docs/installation">Get started</A>
    <Button
      class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white hover:bg-slate-50 focus:bg-slate-50 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
    >
      <Icons.MagnifyingGlass />
      <span class="flex-auto">Quick search...</span>
      <kbd class="font-sans font-semibold dark:text-slate-500">
        <abbr title="Control" class="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr>
        K
      </kbd>
    </Button>
  </div>
</div>
