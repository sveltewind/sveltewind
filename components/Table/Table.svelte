<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Tbody, Thead } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let columns;
  export let data;
  export let rows;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.table, $$props.class);
</script>

<table
  class={classes}
>
  {#if columns !== undefined && rows !== undefined}
    <Thead {columns} />
    <Tbody {columns} {rows} />
  {/if}
  {#if data !== undefined}
    <Tbody {data} />
  {/if}
  <slot />
</table>