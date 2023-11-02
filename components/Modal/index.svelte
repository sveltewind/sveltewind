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
    class={twMerge(
      'w-[100dvw] h-[100dvh] z-[2]',
      isOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    )}
    on:click={close}
  />
  <div
    class={twMerge(
      'fixed top-1/2 left-1/2 -translate-x-1/2 max-w-[calc(100dvw_-_2rem)] -translate-y-1/2 z-[2] transition duration-200 max-h-[calc(100dvh_-_2rem)] overflow-auto',
      !isOpen
        ? 'pointer-events-none opacity-0'
        : 'pointer-events-auto opacity-100'
    )}
  >
    <Card
      class={twMerge($theme.modal, $$props.class)}
      {style}
      use={[events, ...use]}
    >
      <slot />
    </Card>
  </div>
</Portal>
