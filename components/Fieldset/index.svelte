<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';
  import Legend from '../../components/Legend/index.js';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let legend = undefined;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.fieldset, $$props.class);
</script>

<fieldset
  {...$$restProps}
  class={classes}
  {style}
  use:useAction={[events, ...use]}
>
  <slot name="legend">
    {#if legend !== undefined}
      <Legend>{legend}</Legend>
    {/if}
  </slot>
  <slot />
</fieldset>
