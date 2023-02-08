<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let use = [];

  // props (dynamic)
  $: classes = twMerge('', $$props.class);
</script>

<label {...$$restProps} class={classes} use:useAction={[events, ...use]}>
  <slot />
</label>
