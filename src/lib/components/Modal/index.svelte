<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { Card, Overlay, Portal } from '../../components/index.js';
  import { theme } from '../../stores';

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let close = () => (isOpen = false);
  export let isOpen = false;
  export let open = () => (isOpen = true);
  export let style = undefined;
  export let toggle = () => (isOpen = !isOpen);
  export let use = [];
</script>

<Portal>
  <Overlay
    class={twMerge(isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
    on:click={close}
  />
  <div
    class={twMerge(
      $theme.modal,
      !isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
    )}
  >
    <Card class={twMerge($theme.modal, $$props.class)} {style} use={[events, ...use]}>
      <slot />
    </Card>
  </div>
</Portal>
