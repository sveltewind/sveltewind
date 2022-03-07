<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Tr } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let data = undefined;
  export let rows = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.tbody, $$props.class);
</script>

<tbody
  class={classes}
>
  {#if data !== undefined}
    {#each data as row}
      <Tr {row} />
    {/each}
  {/if}
  {#if rows !== undefined}
    {#each rows as row}
      <Tr {row} />
    {/each}
  {/if}
  <slot />
</tbody>