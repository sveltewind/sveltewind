<script>
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../actions';
  import {
    Card,
    Checkbox,
    DataTablePagination,
    DataTableTh,
    DataTableToolbar,
    DataTableTypes,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '../../components';
  import { theme } from '../../stores';
  import { onMount } from 'svelte';

  // handlers

  // helpers
  const columnMapInit = (column) => {
    column = {
      component: DataTableTypes?.[column.type] || DataTableTypes.string,
      isEditable,
      isDownloadable: download?.active,
      isSortable,
      isVisible: true,
      key: column?.key,
      label: column?.key,
      mask: (row) => row[key],
      props: {},
      ...column,
      isInitiated: true,
    };
    return column;
  };
  const rowMapInit = (row) => {
    row = {
      isSelected: false,
      ...row,
    };
    return row;
  };

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let columns = [];
  export let columnView;
  export let create;
  export let download;
  export let isEditable = true;
  export let isSortable = true;
  export let paginate = {};
  export let remove;
  export let rows = [];
  export let selectedRows = [];
  export let sortDirection = 1;
  export let sortIndex = 0;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: if (
    [...columns].filter((column) => column?.component === undefined).length > 0
  )
    columns = [...columns].map(columnMapInit);
  $: showSelectCheckbox = remove?.active;
  $: selectedRows = [...rows].filter(
    ({ isSelected }, i) =>
      isSelected && i >= paginate?.indexStart && i <= paginate?.indexEnd
  );

  onMount(() => {
    columns = [...columns].map(columnMapInit);
    rows = [...rows].map(rowMapInit);
    if (!paginate?.active) paginate.indexEnd = rows.length;
  });
</script>

<Card
  class={twMerge(
    'p-0 max-h-full max-w-full relative oveflow-auto',
    $theme.dataTable,
    $$props.class
  )}
  {style}
  use={[events, ...use]}
>
  <slot name="header">
    <DataTableToolbar
      bind:columns
      bind:columnView
      bind:create
      bind:download
      bind:paginate
      bind:remove
      bind:rows
      {selectedRows}
    >
      <svelte:fragment slot="extras">
        <slot name="toolbarExtras" />
      </svelte:fragment>
    </DataTableToolbar>
  </slot>
  <Card
    class={twMerge(
      'flex max-h-full overflow-auto p-0 rounded-none',
      paginate?.active ? '' : 'rounded-b'
    )}
  >
    <Table class="w-full">
      <Thead>
        <slot name="thead">
          {#if showSelectCheckbox}
            <Th class="p-[.5rem] z-[1]">
              <Checkbox
                class="mr-0"
                on:change={(e) =>
                  (rows = [...rows].map((row, i) => {
                    if (i >= paginate?.indexStart && i <= paginate?.indexEnd)
                      row.isSelected = e.target.checked;
                    return row;
                  }))}
                tabindex="-1"
              />
            </Th>
          {/if}
          {#each columns as column, i}
            {#if column.isVisible}
              <DataTableTh
                bind:rows
                bind:sortDirection
                bind:sortIndex
                {columns}
                {i}
                {...column}
              >
                {column.label}
              </DataTableTh>
            {/if}
          {/each}
        </slot>
      </Thead>
      <Tbody>
        <slot name="tbody">
          {#each rows as row, i}
            {#if i >= paginate?.indexStart && i <= paginate?.indexEnd}
              <Tr>
                {#if showSelectCheckbox}
                  <Td class="p-[.5rem]">
                    <Checkbox
                      bind:checked={row.isSelected}
                      class="mr-0"
                      tabindex="-1"
                    />
                  </Td>
                {/if}
                {#each columns as column}
                  {#if column.isVisible}
                    <Td class="p-0">
                      <svelte:component
                        this={column.component}
                        {...column.props}
                        bind:value={row[column.key]}
                        isEditable={column.isEditable}
                        {row}
                      />
                    </Td>
                  {/if}
                {/each}
              </Tr>
            {/if}
          {/each}
        </slot>
      </Tbody>
    </Table>
  </Card>
  <slot name="pagination">
    {#if paginate?.active}
      <DataTablePagination
        bind:currentPage={paginate.currentPage}
        bind:indexEnd={paginate.indexEnd}
        bind:indexStart={paginate.indexStart}
        bind:rowsPerPage={paginate.rowsPerPage}
        bind:rows
      />
    {/if}
  </slot>
</Card>
