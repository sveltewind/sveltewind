<script lang="ts">
  import { Button, Checkbox, Div, Modal } from '$lib/components/index.js';

  // props
  let close: () => void;
  let isOpen = false;
  let open: () => void;
  let showOverlay: boolean = true;
  let toggle: () => void;
</script>

<Div class="flex flex-col space-y-4 items-start">
  <Checkbox bind:checked={showOverlay}>Show Overlay?</Checkbox>

  <div class="flex space-x-4">
    <Button disabled={isOpen ? undefined : 'disabled'} onclick={close}>Close</Button>
    <Button disabled={!isOpen ? undefined : 'disabled'} onclick={open}>Open</Button>
    <Button onclick={toggle}>Toggle</Button>
  </div>
</Div>

<Modal bind:close bind:isOpen bind:open bind:showOverlay bind:toggle>Modal Content</Modal>
