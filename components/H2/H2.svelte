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
  $: classes = twMerge(defaultClasses, $theme.h2, $$props.class);
</script>

<h2
  class={classes}
>
  <slot />
</h2>