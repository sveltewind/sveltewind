<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents, use as useAction } from '../../actions';
  import { theme } from '../../stores';

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge('', $theme.div, $$props.class);
</script>

<div class={classes} {style} use:useAction={[events, ...use]}>
  <slot />
</div>
