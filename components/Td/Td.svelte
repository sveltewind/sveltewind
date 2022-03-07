<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let cell = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.td, $$props.class);
</script>

<td
  class={classes}
>
  {#if cell !== undefined}
    {cell}
  {/if}
  <slot />
</td>