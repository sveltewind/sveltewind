<script>
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../../actions';
  import { Select } from '../../index.js';

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let options = [];
  export let multiple = false;
  export let row;
  export let style = undefined;
  export let use = [];
</script>

<Select
  {...$$restProps}
  class={twMerge('rounded-none h-[2.5rem]', $$props.class)}
  {multiple}
  {options}
  {style}
  use={[events, ...use]}
>
  <slot />
</Select>
