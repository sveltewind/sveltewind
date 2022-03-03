<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let column;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.th, $$props.class);
</script>

<th
  class={classes}
>
  {#if column !== undefined}
    {column}
  {/if}
  <slot />
</th>