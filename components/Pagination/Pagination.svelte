<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { PaginationButtons, PaginationInfo } from '../../components/index.js';
  import { theme } from '../../stores/index.js';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

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

<div class={classes}>
  <slot>
    <PaginationInfo {paginatedRowIndexes} {total} />
    <PaginationButtons bind:currentPage {rowsPerPage} {total} />
  </slot>
</div>