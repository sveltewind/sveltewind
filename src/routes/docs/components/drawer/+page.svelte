<script lang="ts">
  import { Button, Card, Checkbox, Div, Drawer, Fieldset, Select } from '$components/index.js';

  // props
  let close: () => void;
  let isOpen = false;
  let open: () => void;
  let position: 'bottom' | 'left' | 'right' | 'top' = 'left';
  const positions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' }
  ];
  let showOverlay: boolean = true;
  let toggle: () => void;
</script>

<Div class="flex flex-col space-y-4 items-start">
  <Fieldset legend="Position">
    <Select bind:value={position} options={positions} />
  </Fieldset>

  <Checkbox bind:checked={showOverlay}>Show Overlay?</Checkbox>

  <div class="flex space-x-4">
    <Button disabled={isOpen ? undefined : 'disabled'} onclick={close}>Close</Button>
    <Button disabled={!isOpen ? undefined : 'disabled'} onclick={open}>Open</Button>
    <Button onclick={toggle}>Toggle</Button>
  </div>
</Div>

<Drawer bind:close bind:isOpen bind:open bind:position bind:showOverlay bind:toggle>
  <Card class="flex flex-grow overflow-auto rounded-none">
    Here is a Drawer
    <Button onclick={close}>Close Drawer</Button>
  </Card>
</Drawer>
