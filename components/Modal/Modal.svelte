<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let show = false;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, show ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none', $theme.modal, $$props.class);
</script>

<div
  class={classes}
>
  <slot />
</div>