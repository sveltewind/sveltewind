<script>
  import { twMerge } from 'tailwind-merge';
  import { Button, Card, Icon, Select } from '../index.js';
  import { ChevronDoubleLeft, ChevronLeft } from '../icons/index.js';
  import { theme } from '../../stores/index.js';

  // props (external)
  export let currentPage = 0;
  export let filteredRows = [];
  export let paginate = true;
  export let paginatedRows = [];
  export let rowsPerPage = 10;
  export let totalPages = 0;

  $: totalPages = Math.ceil(
    filteredRows.length / Math.max(1, isNaN(rowsPerPage) ? 0 : rowsPerPage)
  );
  $: paginatedStartIndex =
    currentPage * Math.max(1, isNaN(rowsPerPage) ? 0 : rowsPerPage);
  $: paginatedEndIndex = Math.min(
    filteredRows.length,
    (currentPage + 1) * Math.max(1, isNaN(rowsPerPage) ? 0 : rowsPerPage)
  );
  $: if (filteredRows) {
    paginatedRows = [...filteredRows].filter((_, i) =>
      !paginate ? true : i >= paginatedStartIndex && i < paginatedEndIndex
    );
  }
  $: pageOptions = [...Array(totalPages)].map((_, i) => {
    const start = i * Math.max(1, isNaN(rowsPerPage) ? 0 : rowsPerPage) + 1;
    const end = Math.min(
      filteredRows.length,
      (i + 1) * Math.max(1, isNaN(rowsPerPage) ? 0 : rowsPerPage)
    );
    return { label: `${start}-${end}`, value: i };
  });
  $: if (currentPage > totalPages - 1)
    currentPage = Math.max(0, totalPages - 1);
</script>

{#if paginate}
  <Card
    class="flex-row justify-between space-x-[.5rem] items-center px-[1.5rem] py-[.5rem] rounded-none rounded-b overflow-auto shrink-0"
  >
    <div class="flex space-x-[.5rem] items-center">
      <Button
        class={twMerge($theme.buttonIcon, 'p-[.25rem]')}
        disabled={currentPage === 0 ? 'disabled' : undefined}
        on:click={() => (currentPage = 0)}
      >
        <Icon src={ChevronDoubleLeft} />
      </Button>
      <Button
        class={twMerge($theme.buttonIcon, 'p-[.25rem]')}
        disabled={currentPage === 0 ? 'disabled' : undefined}
        on:click={() => (currentPage = currentPage - 1)}
      >
        <Icon src={ChevronLeft} />
      </Button>
    </div>
    <Select bind:value={currentPage} options={pageOptions} />
    <div class="flex space-x-[.5rem] items-center">
      <Button
        class={twMerge($theme.buttonIcon, 'p-[.25rem]')}
        disabled={currentPage === totalPages - 1 ? 'disabled' : undefined}
        on:click={() => (currentPage = currentPage + 1)}
      >
        <Icon class="rotate-180" src={ChevronLeft} />
      </Button>
      <Button
        class={twMerge($theme.buttonIcon, 'p-[.25rem]')}
        disabled={currentPage === totalPages - 1 ? 'disabled' : undefined}
        on:click={() => (currentPage = totalPages - 1)}
      >
        <Icon class="rotate-180" src={ChevronDoubleLeft} />
      </Button>
    </div>
  </Card>
{/if}
