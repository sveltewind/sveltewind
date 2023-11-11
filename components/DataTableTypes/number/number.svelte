<script>
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../../actions';
  import String from '../string/string.svelte';

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let isEditable = false;
  export let row;
  export let style = undefined;
  export let use = [];
  export let value;
</script>

<String
  {...$$restProps}
  bind:value
  class={twMerge('text-right', $$props.class)}
  {isEditable}
  {row}
  {style}
  use={[events, ...use]}
/>
