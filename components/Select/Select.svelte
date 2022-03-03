<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import Option from '../../components/Option/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let options;
  export let value = '';

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.select, $$props.class);
</script>

<select
  bind:value
  class={classes}
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