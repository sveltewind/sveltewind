<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { Button } from '../../components/index.js';
  import { theme } from '../../stores/index.js';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let currentPage = 0;
  export let rowsPerPage = 10;
  export let total = 0;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.paginationButtons.default, $$props.class);
  $: pageIndexes = {
    end: Math.min(Math.floor(total / rowsPerPage), currentPage + 2),
    last: Math.floor(total / rowsPerPage),
    start: Math.max(0, currentPage - 2),
  };
</script>

<div class={classes} use:events {...$$restProps}>
  <slot>
    {#if currentPage > 0}
      <Button class={$theme.button.paginationButtonDefault} on:click={() => currentPage = 0}>First</Button>
      <Button class={$theme.button.paginationButtonDefault} on:click={() => currentPage--}>Previous</Button>
    {/if}
    {#each [...Array(pageIndexes.end - pageIndexes.start + 1)] as __dirname, i}
      <Button class={currentPage === pageIndexes.start + i ? $theme.button.paginationButtonCurrent : $theme.button.paginationButtonDefault} on:click={()=>currentPage = pageIndexes.start + i}>{pageIndexes.start + i + 1}</Button>
    {/each}
    {#if currentPage < pageIndexes.last}
      <Button class={$theme.button.paginationButtonDefault} on:click={() => currentPage++}>Next</Button>
      <Button class={$theme.button.paginationButtonDefault} on:click={() => currentPage = pageIndexes.last}>Last</Button>
    {/if}
  </slot>
</div>