<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents, setType, use as useAction } from '../../actions';
  import { theme } from '../../stores';

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let disabled = undefined;
  export let style = undefined;
  export let tabindex = undefined;
  export let type = 'button';
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.button, $$props.class);
</script>

<button
  {...$$restProps}
  class={classes}
  {disabled}
  {style}
  {tabindex}
  use:useAction={[events, [setType, type], ...use]}
>
  <slot />
</button>
