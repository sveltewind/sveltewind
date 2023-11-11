<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../../actions';
  import { Checkbox } from '../../../components';
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

<div
  class={twMerge(
    $theme.input,
    'flex justify-center rounded-none hover:ring-offset-gray-300 focus:ring-offset-gray-300 dark:hover:ring-offset-white/[.05] dark:focus:ring-offset-white/[.05]'
  )}
>
  <Checkbox
    {...$$restProps}
    bind:checked={value}
    class={twMerge('mr-0', $$props.class)}
    disabled={isEditable ? undefined : 'disabled'}
    {style}
    use={[events, ...use]}
  />
</div>
