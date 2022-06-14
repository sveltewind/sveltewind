<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { setType } from '../../actions';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let type = 'text';
  export let value = '';

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.input, $$props.class);
</script>

<input
  {...$$props}
  bind:value
  class={classes}
  use:events
  use:setType={type}
/>