<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Th } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let columns = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.thead, $$props.class);
</script>

<thead
  class={classes}
>
  {#if columns !== undefined}
    {#each columns as column}
      <Th {column} />
    {/each}
  {/if}
  <slot />
</thead>