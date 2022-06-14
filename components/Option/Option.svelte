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
  export let selected = false;
  export let value = '';

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.option, $$props.class);
</script>

<option
  class={classes}
  {selected}
  {value}
  use:events
  {...$$restProps}
>
  <slot />
</option>