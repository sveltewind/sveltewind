<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../actions';
  import { Icon, Th } from '../../components';
  import { ChevronDown } from '../icons';
  import { theme } from '../../stores';

  // handlers
  const clickHandler = () => {
    if (!isSortable) return;
    sortDirection = sortIndex === i ? sortDirection * -1 : 1;
    sortIndex = i;
    key = columns[sortIndex].key;
    rows = [...rows].sort(sortHandler);
  };
  const sortHandler = (a, b) => {
    if (typeof a?.[key] === 'number')
      return (
        (a?.[key] < b?.[key] ? -1 : a?.[key] > b?.[key] ? 1 : 0) * sortDirection
      );
    if (typeof a?.[key] === 'string')
      return a?.[key]?.localeCompare(b?.[key]) * sortDirection;
  };

  // helpers

  // props (internal)
  const events = getEvents(current_component);
  let key;

  // props (external)
  export let columns = [];
  export let i = 0;
  export let isSortable = true;
  export let rows = [];
  export let sortDirection = 1;
  export let sortIndex = 0;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(
    'z-[1]',
    isSortable ? $theme.dataTableTh : undefined,
    $$props.class
  );
</script>

<Th class={classes} on:click={clickHandler} {style} use={[events, ...use]}>
  <div class="flex justify-between space-x-[.5rem] items-center">
    <div>
      <slot />
    </div>
    <Icon
      class={twMerge(
        'transition duration-200 w-[1rem] h-[1rem]',
        sortDirection === 1 ? 'rotate-0' : 'rotate-180',
        sortIndex === i ? 'scale-100' : 'scale-0'
      )}
      src={ChevronDown}
    />
  </div>
</Th>
