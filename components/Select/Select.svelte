<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import Option from '../../components/Option/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let options = undefined;
  export let value = '';

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.select, $$props.class);
</script>

<select
  bind:value
  class={classes}
  use:events
  {...$$restProps}
>
  {#if options !== undefined}
    {#each options as option}
      <Option
        selected={option.value === value}
        value={option.value}
      >
        {option.label}
      </Option>
    {/each}
  {/if}
  <slot />
</select>