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
  $: classes = twMerge(defaultClasses, $theme.nav, $$props.class);
</script>

<nav
  class={classes}
  use:events
>
  <slot />
</nav>