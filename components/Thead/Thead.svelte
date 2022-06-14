<script>
  // imports
  import { getEvents } from '../../actions';
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

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.thead, $$props.class);
</script>

<thead
  class={classes}
  use:events
  {...$$restProps}
>
  {#if columns !== undefined}
    {#each columns as column}
      <Th {column} />
    {/each}
  {/if}
  <slot />
</thead>