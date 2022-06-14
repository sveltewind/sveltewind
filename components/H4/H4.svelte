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

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.h4, $$props.class);
</script>

<h4
  class={classes}
  use:events
  {...$$restProps}
>
  <slot />
</h4>