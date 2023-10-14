<script>
  import { twMerge } from 'tailwind-merge';
  import { clickOutside } from '../../actions/index.js';
  import { Button, Card, Icon, Portal, Overlay } from '../index.js';
  import { Cog6Tooth } from '../icons/index.js';
  import { theme } from '../../stores/index.js';

  // props (external)
  export let isOpen = false;
  export let src = Cog6Tooth;
</script>

<Button
  class={twMerge($theme.buttonIcon, 'p-[.25rem]')}
  on:click={() => (isOpen = !isOpen)}
>
  <slot name="icon">
    <Icon {src} />
  </slot>
</Button>
<Portal>
  <Overlay
    class={twMerge(
      'w-[100dvw] h-[100dvh] z-[2]',
      isOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    )}
    on:click={() => (isOpen = false)}
  />
  <div
    class={twMerge(
      'fixed top-1/2 left-1/2 -translate-x-1/2 max-w-[calc(100dvw_-_2rem)] -translate-y-1/2 z-[2] transition duration-200 max-h-[calc(100dvh_-_2rem)] overflow-auto',
      !isOpen
        ? 'pointer-events-none opacity-0'
        : 'pointer-events-auto opacity-100'
    )}
  >
    <Card class={twMerge('space-y-[1rem] overflow-auto', $$props.class)}>
      <slot />
    </Card>
  </div>
</Portal>
