<script>
  import { twMerge } from 'tailwind-merge';
  import { Card, Icon, P, Table, Tbody, Td, Th, Thead, Tr } from '../index.js';
  import { ChevronDown } from '../icons/index.js';
  import Header from './Header.svelte';
  import Pagination from './Pagination.svelte';

  // types
  /**
   * @typedef Column
   * @property {import('svelte').SvelteComponent} [component]
   * @property {Boolean} [export]
   * @property {String} [key]
   * @property {String} label
   * @property {{}} [props]
   * @property {Slot} [slot]
   * @property {Boolean} [sortable]
   * @property {Function} [sortFn]
   * @property {Boolean} [visible]
   *
   * @typedef {{[key:string]: any}} Row
   *
   * @typedef Slot
   * @property {Function} [valueFn]
   */

  // props (external)
  export let /** @type {Column[]} */ columns = [];
  export let currentPage = 0;
  export let filter = () => true;
  export let paginate = true;
  export let /** @type {Row[]} */ rows = [];
  export let rowsPerPage = 10;
  export let sortColumnIndex = 0;
  export let sortDirection = 1;
  export let sortable = true;
  /**
   * Function to sort the rows
   * @param {Number} columnIndex
   */
  export let sortRows = (columnIndex) => {
    sortDirection = sortColumnIndex === columnIndex ? sortDirection * -1 : 1;
    sortColumnIndex = columnIndex;
    const column = columns[sortColumnIndex];
    rows = [...rows].sort((a, b) => {
      if (column?.sortFn !== undefined)
        return column.sortFn(a, b) * sortDirection;
      if (column?.key !== undefined)
        return (
          (typeof a[column.key] === 'string'
            ? a[column.key].localeCompare(b[column.key])
            : a[column.key] < b[column.key]
            ? -1
            : a[column.key] > b[column.key]
            ? 1
            : 0) * sortDirection
        );
      if (column?.slot?.valueFn)
        return (
          (typeof column.slot.valueFn(a) === 'string'
            ? column.slot.valueFn(a).localeCompare(column.slot.valueFn(b))
            : column.slot.valueFn(a) < column.slot.valueFn(b)
            ? -1
            : column.slot.valueFn(a) > column.slot.valueFn(b)
            ? 1
            : 0) * sortDirection
        );
      return 0;
    });
  };

  // props (internal)
  /** @type {Row[]}*/
  let paginatedRows = [];
  $: if ([...columns].filter(({ type }) => type !== undefined).length > 0)
    columns = [...columns].map(({ key, type, ...column }) => {
      let newColumn;
      if (type.toLowerCase() === 'string')
        newColumn = {
          component: P,
          key,
          slot: {
            valueFn: (row) => row[key],
          },
          ...column,
        };
      return newColumn;
    });
  $: if (
    [...columns].filter((column) => column?.export === undefined).length > 0
  )
    columns = columns.map((column) => {
      return { ...column, export: column?.export || true };
    });
  $: if ([...columns].filter(({ visible }) => visible === undefined).length > 0)
    columns = columns.map((column) => {
      return { ...column, visible: column?.visible || true };
    });
  $: filteredRows = [...rows].filter((row) => filter(row));
</script>

<Card
  class={twMerge(
    'p-0 max-h-full max-w-full overflow-auto relative',
    $$props.class
  )}
>
  <slot name="header">
    <Header bind:columns bind:paginate bind:rowsPerPage {paginatedRows}>
      <svelte:fragment slot="extraSettings">
        <slot name="extraSettings" />
      </svelte:fragment>
    </Header>
  </slot>
  <Card class="flex max-h-full overflow-auto p-0 rounded-none">
    <Table class="w-full">
      <Thead>
        <slot name="thead">
          {#each columns as { label, visible, ...column }, i}
            {#if visible}
              <Th
                class={sortable && column?.sortable !== false
                  ? twMerge(
                      'cursor-pointer transition duration-200 hover:bg-blue-500/[.1]'
                    )
                  : undefined}
                on:click={() =>
                  sortable && column?.sortable !== false ? sortRows(i) : null}
              >
                <div class="flex justify-between space-x-[.5rem] items-center">
                  <div>
                    {label}
                  </div>
                  {#if sortable}
                    <Icon
                      class={twMerge(
                        'transition duration-200 w-[1rem] h-[1rem]',
                        sortColumnIndex === i ? 'scale-100' : 'scale-0',
                        sortDirection === 1 ? undefined : 'rotate-180'
                      )}
                      src={ChevronDown}
                    />
                  {/if}
                </div>
              </Th>
            {/if}
          {/each}
        </slot>
      </Thead>
      <Tbody>
        <slot name="tbody">
          {#each paginatedRows as row}
            <Tr>
              {#each columns as { component, key, props, slot, visible }}
                {#if visible}
                  <Td>
                    <svelte:component this={component} {...props} {row}>
                      <!-- <svelte:component
                      this={component}
                      {...props}
                      bind:value={row[key]}
                      {row}
                    > -->
                      {#if slot}
                        {#if slot.valueFn}
                          {@html slot.valueFn(row)}
                        {/if}
                      {/if}
                    </svelte:component>
                  </Td>
                {/if}
              {/each}
            </Tr>
          {/each}
        </slot>
      </Tbody>
    </Table>
  </Card>
  <slot name="pagination">
    <Pagination
      bind:currentPage
      bind:paginatedRows
      bind:rowsPerPage
      {filteredRows}
      {paginate}
    />
  </slot>
</Card>
