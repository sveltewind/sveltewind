<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents, use as useAction } from '../../../actions';
  import { theme } from '../../../stores';

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let isEditable = false;
  export let row;
  export let style = undefined;
  export let use = [];
  export let value;
</script>

{#if !isEditable}
  <div
    {...$$restProps}
    class={twMerge(
      $theme.input,
      'rounded-none hover:ring-offset-gray-300 dark:hover:ring-offset-white/[.05]',
      $$props.class
    )}
    contenteditable={undefined}
    {style}
    use:useAction={[events, ...use]}
  >
    {value}
  </div>
{:else}
  <div
    {...$$restProps}
    bind:innerText={value}
    class={twMerge($theme.input, 'rounded-none', $$props.class)}
    contenteditable="true"
    {style}
    use:useAction={[events, ...use]}
  >
    {value}
  </div>
{/if}
