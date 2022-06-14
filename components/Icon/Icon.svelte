<script>
  // imports
  import { Icon } from 'svelte-hero-icons';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let src = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.icon, $$props.class);
</script>

{#if src !== undefined}
  <Icon {src} class={classes} {...$$restProps}/>
{/if}