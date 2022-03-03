<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';
  import Legend from '../../components/Legend/index.js'

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let legend = '';
  export let showLegend = true;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.fieldset, $$props.class);
</script>

<fieldset
  class={classes}
>
  {#if showLegend}
    <Legend>{legend}</Legend>
  {/if}
  <slot />
</fieldset>