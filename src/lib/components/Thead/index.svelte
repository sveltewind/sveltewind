<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { Th } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let columns = undefined;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.thead, $$props.class);
</script>

<thead
  {...$$restProps}
  class={classes}
  {style}
  use:useAction={[events, ...use]}
>
  {#if columns !== undefined}
    {#each columns as column}
      <Th {column} />
    {/each}
  {/if}
  <slot />
</thead>
