<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../actions';
  import { Button, Card, Icon, Select } from '../../components';
  import { ChevronDoubleLeft, ChevronLeft } from '../../components/icons';
  import { theme } from '../../stores';

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let currentPage = 0;
  export let indexEnd = 0;
  export let indexStart = 0;
  export let rows = [];
  export let rowsPerPage = 10;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: totalRows = rows.length;
  $: totalPages = Math.ceil(totalRows / rowsPerPage);
  $: indexStart = currentPage * rowsPerPage;
  $: indexEnd =
    currentPage >= totalPages - 1
      ? totalRows - 1
      : indexStart + rowsPerPage - 1;
  $: pageOptions = [...Array(totalPages)].map((_, i) => {
    const start = i * rowsPerPage + 1;
    const end = Math.min(totalRows, (i + 1) * rowsPerPage);
    return { label: `${start}-${end}`, value: i };
  });
  $: if (currentPage > totalPages - 1)
    currentPage = Math.max(0, totalPages - 1);
</script>

<Card
  class={twMerge(
    'flex flex-row rounded-none rounded-b items-center justify-between py-[.5rem] px-[.5rem] space-x-[.5rem] shadow-[inset_0_1px_0_rgba(0,0,0,.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,.1)]',
    $theme.dataTablePagination,
    $$props.class
  )}
  {style}
  use={[events, ...use]}
>
  <div class="flex space-x-[.5rem] items-center">
    <Button
      class={twMerge($theme.buttonIcon, 'p-[.5rem]')}
      disabled={currentPage === 0 ? 'disabled' : undefined}
      on:click={() => (currentPage = 0)}
    >
      <Icon src={ChevronDoubleLeft} />
    </Button>
    <Button
      class={twMerge($theme.buttonIcon, 'p-[.5rem]')}
      disabled={currentPage === 0 ? 'disabled' : undefined}
      on:click={() => (currentPage = currentPage - 1)}
    >
      <Icon src={ChevronLeft} />
    </Button>
  </div>
  <Select bind:value={currentPage} options={pageOptions} />
  <div class="flex space-x-[.5rem] items-center">
    <Button
      class={twMerge($theme.buttonIcon, 'p-[.5rem]')}
      disabled={currentPage >= totalPages - 1 ? 'disabled' : undefined}
      on:click={() => (currentPage = currentPage + 1)}
    >
      <Icon class="rotate-180" src={ChevronLeft} />
    </Button>
    <Button
      class={twMerge($theme.buttonIcon, 'p-[.5rem]')}
      disabled={currentPage >= totalPages - 1 ? 'disabled' : undefined}
      on:click={() => (currentPage = totalPages - 1)}
    >
      <Icon class="rotate-180" src={ChevronDoubleLeft} />
    </Button>
  </div>
</Card>
