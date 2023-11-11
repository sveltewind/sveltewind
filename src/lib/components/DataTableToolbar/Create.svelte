<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Button, Icon } from '../../components';
  import { Plus } from '../icons';
  import { theme } from '../../stores';

  // handlers

  // props (external)
  export let active = true;
  export let clickHandler = () => {
    confirmHandler();
  };
  export let columns = [];
  export let confirmHandler = () => {
    const row = [...columns].reduce((obj, column) => {
      const key = column.key;
      let value = '';
      if (column?.type === 'boolean') value = false;
      if (column?.type === 'number') value = 0;
      obj[key] = value;
      return obj;
    }, {});
    rows = [...rows, row];
  };
  export let rows = [];
</script>

{#if active}
  <Button class={twMerge($theme.buttonIcon)} on:click={clickHandler}>
    <Icon src={Plus} />
  </Button>
{/if}
