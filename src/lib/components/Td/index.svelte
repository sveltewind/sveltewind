<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
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
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.td, $$props.class);
</script>

<td {...$$restProps} class={classes} {style} use:useAction={[events, ...use]}>
  {#if cell !== undefined}{cell}{/if}
  <slot />
</td>
