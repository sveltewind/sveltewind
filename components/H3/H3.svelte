<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.h3, $$props.class);
</script>

<h3
  class={classes}
>
  <slot />
</h3>