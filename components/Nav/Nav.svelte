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
  $: classes = twMerge(defaultClasses, $theme.nav, $$props.class);
</script>

<nav
  class={classes}
>
  <slot />
</nav>