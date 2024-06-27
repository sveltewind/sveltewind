<script lang="ts">
  import { page } from '$app/stores';
  import * as actions from '$lib/actions/index.js';
  import * as components from '$lib/components/index.js';
  import { A, Button, Card, Icon } from '$lib/components/index.js';
  import { ChevronDown } from '$lib/icons/index.js';
  import * as themes from '$lib/themes/index.js';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  // props
  const sections = new Map([
    [
      'Getting Started',
      { isOpen: false, items: new Map([['Installation', '/docs/installation']]) }
    ],
    [
      'Actions',
      {
        isOpen: false,
        items: Object.keys(actions).reduce((map, key) => {
          const label = key
            .replace(/(^.)/g, (character) => character.toUpperCase())
            .replace(/([A-Z])/g, ' $1');
          map.set(label, `/docs/actions/${key.toLowerCase()}`);
          return map;
        }, new Map())
      }
    ],
    [
      'Components',
      {
        isOpen: false,
        items: Object.keys(components).reduce((map, key) => {
          const label = key
            .replace(/(^.)/g, (character) => character.toUpperCase())
            .replace(/([A-Z])/g, ' $1');
          map.set(label, `/docs/components/${key.toLowerCase()}`);
          return map;
        }, new Map())
      }
    ],
    [
      'Themes',
      {
        isOpen: false,
        items: Object.keys(themes).reduce((map, key) => {
          const label = key
            .replace(/(^.)/g, (character) => character.toUpperCase())
            .replace(/([A-Z])/g, ' $1');
          map.set(label, `/docs/themes/${key.toLowerCase()}`);
          return map;
        }, new Map())
      }
    ]
  ]);
</script>

<div class="flex flex-grow overflow-auto">
  <Card
    class="overflow-auto rounded-none bg-transparent dark:bg-transparent min-w-[15rem] relative divide-y divide-slate-200 dark:divide-slate-800"
  >
    {#each [...sections] as [sectionTitle, { isOpen, items: sectionItems }]}
      <div class="flex flex-col py-2 first:pt-0">
        <Button
          class="font-bold text-slate-950 dark:text-slate-50 py-2 bg-transparent hover:bg-transparent focus:bg-transparent dark:shadow-none justify-between px-0 text-base font-medium"
          onclick={() => (isOpen = !isOpen)}
        >
          <span>{sectionTitle}</span>
          <Icon
            class={twMerge('h-4 w-4 transition duration-200', isOpen ? 'rotate-0' : '-rotate-90')}
            src={ChevronDown}
          />
        </Button>
        {#if isOpen}
          <div class="flex flex-col" transition:slide={{ duration: 200 }}>
            {#each [...sectionItems] as [label, href]}
              <A
                class={twMerge(
                  'hover:border-slate-950 focus:border-slate-950 dark:hover:border-slate-50 dark:focus:border-slate-50 border-l border-slate-200 dark:border-slate-800 px-4 py-2 shadow-none dark:shadow-none hover:text-slate-950 focus:text-slate-950 dark:hover:text-slate-50 dark:focus:text-slate-50',
                  $page.url.pathname === href
                    ? 'border-violet-500 dark:border-violet-500 text-slate-950 dark:text-slate-50 hover:border-violet-500 focus:border-violet-500 dark:hover:border-violet-500 dark:focus:border-violet-500'
                    : undefined
                )}
                {href}
              >
                {label}
              </A>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </Card>
  <div>
    <slot />
  </div>
</div>
