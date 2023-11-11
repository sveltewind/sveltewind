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
  export let column = undefined;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.th, $$props.class);
</script>

<th {...$$restProps} class={classes} {style} use:useAction={[events, ...use]}>
  {#if column !== undefined}{column}{/if}
  <slot />
</th>
