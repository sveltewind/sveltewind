<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let href = '#';
  export let style = undefined;
  export let tabindex = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.a, $$props.class);
</script>

<a
  {...$$restProps}
  class={classes}
  {href}
  {style}
  {tabindex}
  use:useAction={[events, ...use]}
>
  <slot />
</a>
