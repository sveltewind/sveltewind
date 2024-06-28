<script lang="ts">
  import { page } from '$app/stores';
  import { A, Button, Card, Drawer, Icon } from '$components/index.js';
  import { ChevronDown } from '$lib/icons/index.js';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';
  import { menu } from './menu.svelte.js';

  // props
  let toggle: () => boolean;

  onMount(() => {
    menu.forEach(({ isOpen, items }, i) => {
      if ([...items].map(([_, { href }]) => href).includes($page.url.pathname))
        menu[i].isOpen = true;
    });
  });
</script>

<div class="flex flex-grow overflow-auto">
  <Card
    class="hidden lg:flex overflow-auto rounded-none bg-transparent dark:bg-transparent min-w-[15rem] relative divide-y divide-slate-200 dark:divide-slate-800"
  >
    {#each menu as { title, isOpen, items }, i}
      <div class="flex flex-col py-2 first:pt-0">
        <Button
          class="font-bold text-slate-950 dark:text-slate-50 py-2 bg-transparent hover:bg-transparent focus:bg-transparent dark:shadow-none justify-between px-0 text-base"
          onclick={() => {
            menu[i].isOpen = !menu[i].isOpen;
          }}
        >
          <span>{title}</span>
          <Icon
            class={twMerge('h-4 w-4 transition duration-200', isOpen ? 'rotate-0' : '-rotate-90')}
            src={ChevronDown}
          />
        </Button>
        {#if isOpen}
          <div class="flex flex-col" transition:slide={{ duration: 200 }}>
            {#each [...items] as [label, { href }]}
              <A
                class={twMerge(
                  'hover:shadow-none hover:border-slate-950 focus:border-slate-950 dark:hover:border-slate-50 dark:focus:border-slate-50 border-l border-slate-200 dark:border-slate-800 px-4 py-2 shadow-none dark:shadow-none hover:text-slate-950 focus:text-slate-950 dark:hover:text-slate-50 dark:focus:text-slate-50',
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
  <div class="flex flex-col flex-grow overflow-auto p-4 space-y-8">
    <!-- <Button
      class="text-current lg:hidden shadow-none self-start px-3 bg-transparent hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30"
      onclick={toggle}
    >
      <Icon src={Bars2} />
    </Button> -->
    <slot />
  </div>
</div>

<Drawer bind:toggle class="w-full max-w-[calc(100vw_-_2rem)]">
  <Card class="flex-grow rounded-none overflow-auto text-lg">
    {#each menu as { title, items }, i}
      <div class="flex flex-col py-2 first:pt-0">
        <div
          class="font-bold text-slate-950 dark:text-slate-50 py-2 bg-transparent hover:bg-transparent focus:bg-transparent dark:shadow-none justify-between px-0 text-lg"
        >
          <span>{title}</span>
        </div>
        <div class="flex flex-col" transition:slide={{ duration: 200 }}>
          {#each [...items] as [label, href]}
            <A
              class={twMerge(
                'hover:shadow-none hover:border-slate-950 focus:border-slate-950 dark:hover:border-slate-50 dark:focus:border-slate-50 border-l border-slate-200 dark:border-slate-800 px-4 py-2 shadow-none dark:shadow-none hover:text-slate-950 focus:text-slate-950 dark:hover:text-slate-50 dark:focus:text-slate-50',
                $page.url.pathname === href
                  ? 'border-violet-500 dark:border-violet-500 text-slate-950 dark:text-slate-50 hover:border-violet-500 focus:border-violet-500 dark:hover:border-violet-500 dark:focus:border-violet-500'
                  : undefined
              )}
              {href}
              onclick={toggle}
            >
              {label}
            </A>
          {/each}
        </div>
      </div>
    {/each}
  </Card>
</Drawer>
