<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let href ='#'

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.a, $$props.class);
</script>

<a
  class={classes}
  {href}
  on:click
>
  <slot />
</a>
