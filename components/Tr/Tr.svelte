<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Td } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let row = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.tr, $$props.class);
</script>

<tr
  class={classes}
>
  {#if row !== undefined}
    {#each row as cell}
      <Td {cell} />
    {/each}
  {/if}
  <slot />
</tr>