<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores/index.js';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let paginatedRowIndexes = {
    start: 0,
    end: 9
  }
  export let total = 0;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.paginationInfo.default, $$props.class);
</script>

<div class={classes}>Showing {paginatedRowIndexes.start + 1} to {Math.min(paginatedRowIndexes.end + 1, total)} of {total}</div>