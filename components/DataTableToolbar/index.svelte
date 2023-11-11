<script>
  // imports
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { getEvents } from '../../actions';
  import { Card } from '../../components';
  import { theme } from '../../stores';
  import { ColumnView, Create, Download, Paginate, Remove } from './index';

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let columns = [];
  export let columnView = {};
  export let create = {};
  export let download = {};
  export let paginate = {};
  export let remove = {};
  export let rows = [];
  export let selectedRows;
  export let style = undefined;
  export let use = [];
</script>

<Card
  class={twMerge($theme.dataTableToolbar, $$props.class)}
  {style}
  use={[events, ...use]}
>
  <slot>
    <ColumnView
      bind:active={columnView.active}
      bind:clickHandler={columnView.clickHandler}
      bind:columns
      bind:columnsTemp={columnView.columnsTemp}
      bind:confirmHandler={columnView.confirmHandler}
      bind:close={columnView.close}
      bind:isOpen={columnView.isOpen}
      bind:open={columnView.open}
      bind:toggle={columnView.toggle}
    />
    <Create
      bind:active={create.active}
      bind:clickHandler={create.clickHandler}
      bind:close={create.close}
      bind:columns
      bind:confirmHandler={create.confirmHandler}
      bind:open={create.open}
      bind:toggle={create.toggle}
      bind:rows
    />
    <Download
      bind:active={download.active}
      bind:clickHandler={download.clickHandler}
      bind:close={download.close}
      bind:confirmHandler={download.confirmHandler}
      bind:open={download.open}
      bind:toggle={download.toggle}
      {columns}
      {selectedRows}
    />
    <Paginate
      bind:active={paginate.active}
      bind:clickHandler={paginate.clickHandler}
      bind:close={paginate.close}
      bind:confirmHandler={paginate.confirmHandler}
      bind:open={paginate.open}
      bind:toggle={paginate.toggle}
      bind:rowsPerPage={paginate.rowsPerPage}
    />
    <Remove
      bind:active={remove.active}
      bind:clickHandler={remove.clickHandler}
      bind:close={remove.close}
      bind:confirmHandler={remove.confirmHandler}
      bind:isOpen={remove.isOpen}
      bind:open={remove.open}
      bind:rows
      bind:toggle={remove.toggle}
      {selectedRows}
    />
    <slot name="extras" />
  </slot>
</Card>
