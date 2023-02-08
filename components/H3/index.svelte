<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const events = getEvents(current_component);
  const defaultClasses = '';

  // props (external)
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.h3, $$props.class);
</script>

<h3 {...$$restProps} class={classes} {style} use:useAction={[events, ...use]}>
  <slot />
</h3>
