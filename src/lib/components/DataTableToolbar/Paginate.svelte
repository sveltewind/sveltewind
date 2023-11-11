<script>
  // imports
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { Button, Fieldset, Form, Icon, Input, Modal } from '../../components';
  import { ChevronUpDown } from '../icons';
  import { theme } from '../../stores';

  // props (internal)
  let rowsPerPageTemp = 10;

  // props (external)
  export let active = true;
  export let clickHandler = () => {
    rowsPerPageTemp = rowsPerPage;
    open();
  };
  export let close;
  export let confirmHandler = (e) => {
    e?.preventDefault();
    if (isNaN(+rowsPerPageTemp) || +rowsPerPageTemp < 1)
      return (error = 'Incorrect value submitted.  Please try again.');
    rowsPerPage =
      isNaN(+rowsPerPageTemp) || +rowsPerPageTemp < 1
        ? rowsPerPage
        : +rowsPerPageTemp;
    error = undefined;
    close();
  };
  export let error = undefined;
  export let isOpen = false;
  export let open;
  export let rowsPerPage = 10;
  export let toggle;
</script>

{#if active}
  <Button class={twMerge($theme.buttonIcon)} on:click={clickHandler}>
    <Icon class="rotate-90" src={ChevronUpDown} />
  </Button>
  <Modal bind:close bind:isOpen bind:open bind:toggle class="space-y-[1rem]">
    <Form on:submit={confirmHandler}>
      <div class="flex flex-col space-y-[1rem] min-h-[calc(1.5rem_*_5)]">
        <Fieldset legend="Rows Per Page">
          <Input
            bind:value={rowsPerPageTemp}
            on:focus={() => (error = undefined)}
            class="md:hidden {error !== undefined
              ? 'ring-offset-red-500 focus:ring-offset-red-500 dark:ring-offset-red-500 dark:focus:ring-offset-red-500 focus:ring-red-500/[.3]'
              : ''}"
            min="1"
            type="tel"
          />
          <Input
            bind:value={rowsPerPageTemp}
            on:focus={() => (error = undefined)}
            class="hidden md:block {error !== undefined
              ? 'ring-offset-red-500 focus:ring-offset-red-500 dark:ring-offset-red-500 dark:focus:ring-offset-red-500 focus:ring-red-500/[.3]'
              : ''}"
            min="1"
            type="number"
          />
        </Fieldset>
        {#if error !== undefined}
          <div class="text-red-500" transition:slide>
            {error}
          </div>
        {/if}
      </div>
      <div class="grid grid-cols-2 gap-[.5rem]">
        <Button class={$theme.buttonOutline} on:click={close}>Cancel</Button>
        <Button on:click={confirmHandler} type="submit">Update</Button>
      </div>
    </Form>
  </Modal>
{/if}
