<script>
  import { twMerge } from 'tailwind-merge';
  import { Button, Icon, Modal } from '..';
  import { Trash } from '../icons';
  import { theme } from '../../stores';

  // props (internal)
  let message = '';

  // props (external)
  export let active = true;
  export let clickHandler = () => {
    open();
  };
  export let close;
  export let confirmHandler = () => {
    rows = [...rows].filter(({ isSelected }) => !isSelected);
    close();
  };
  export let isOpen = false;
  export let open;
  export let rows = [];
  export let selectedRows = [];
  export let toggle;

  // props (dynamic)
  $: if (selectedRows)
    message = `Are you sure you want to remove ${selectedRows.length} row${
      selectedRows.length === 1 ? '' : 's'
    }?`;
</script>

{#if active}
  <Button
    class={twMerge(
      $theme.buttonIcon,
      'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-500/[.3]'
    )}
    disabled={selectedRows.length > 0 ? undefined : 'disabled'}
    on:click={clickHandler}
  >
    <Icon src={Trash} />
  </Button>
  <Modal
    bind:close
    bind:isOpen
    bind:open
    bind:toggle
    class="space-y-[1rem] overflow-auto"
  >
    <div class="min-h-[calc(1.5rem_*_5)]">
      {message}
    </div>
    <div class="grid grid-cols-2 gap-[.5rem]">
      <Button class={$theme.buttonOutline} on:click={close}>Cancel</Button>
      <Button
        class="bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-500/[.3] text-white"
        on:click={confirmHandler}
      >
        Delete
      </Button>
    </div>
  </Modal>
{/if}
