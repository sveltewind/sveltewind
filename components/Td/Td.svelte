<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let cell = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.td, $$props.class);
</script>

<td
  class={classes}
  use:events
  {...$$restProps}
>
  {#if cell !== undefined}
    {cell}
  {/if}
  <slot />
</td>