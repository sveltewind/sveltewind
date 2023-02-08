<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents, setType, use as useAction } from '../../actions';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let max = undefined;
  export let min = undefined;
  export let step = undefined;
  export let style = undefined;
  export let tabindex = undefined;
  export let type = 'text';
  export let value = '';
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.input, $$props.class);
</script>

<input
  {...$$restProps}
  bind:value
  class={classes}
  {max}
  {min}
  {step}
  {style}
  {tabindex}
  use:useAction={[events, [setType, type], ...use]}
/>
