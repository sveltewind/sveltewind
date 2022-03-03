<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { setType } from '../../actions';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

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
  use:setType={type}
/>