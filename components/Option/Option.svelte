<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

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
>
  <slot />
</option>