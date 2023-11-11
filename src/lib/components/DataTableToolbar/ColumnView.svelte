<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Button, Checkbox, Icon, Modal } from '..';
  import { ViewColumns } from '../icons';
  import { theme } from '../../stores';

  // handlers

  // props (external)
  export let active = true;
  export let clickHandler = () => {
    columnsTemp = JSON.parse(JSON.stringify(columns));
    open();
  };
  export let columns = [];
  export let columnsTemp = [];
  export let confirmHandler = () => {
    columns = JSON.parse(JSON.stringify(columnsTemp));
    close();
  };
  export let close;
  export let isOpen = false;
  export let open;
  export let toggle;
</script>

{#if active}
  <Button class={twMerge($theme.buttonIcon)} on:click={clickHandler}>
    <Icon src={ViewColumns} />
  </Button>
  <Modal
    bind:close
    bind:isOpen
    bind:open
    bind:toggle
    class="space-y-[1rem] overflow-auto"
  >
    <div class="flex flex-col space-y-[.5rem] min-h-[calc(1.5rem_*_5)]">
      {#each columnsTemp as column}
        <Checkbox bind:checked={column.isVisible}>{column.label}</Checkbox>
      {/each}
    </div>
    <div class="grid grid-cols-2 gap-[.5rem]">
      <Button class={$theme.buttonOutline} on:click={close}>Cancel</Button>
      <Button on:click={confirmHandler}>Update</Button>
    </div>
  </Modal>
{/if}
