<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { PaginationButtons, PaginationInfo } from '../../components/index.js';
  import { theme } from '../../stores/index.js';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let currentPage = 0;
  export let paginatedRowIndexes = {
    start: 0,
    end: 9
  }
  export let rowsPerPage = 10;
  export let total = 0;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.pagination.default, $$props.class);
</script>

<div class={classes} use:events>
  <slot>
    <PaginationInfo {paginatedRowIndexes} {total} />
    <PaginationButtons bind:currentPage {rowsPerPage} {total} />
  </slot>
</div>