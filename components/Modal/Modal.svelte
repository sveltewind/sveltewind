<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import Overlay from '../../components/Overlay/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let showOverlay = true;
  export let show = false;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none', $theme.modal, $$props.class);
</script>

<div
  class={classes}
>
  {#if showOverlay}
    <Overlay on:click={() => show = !show} class="cursor-pointer" />
  {/if}
  <slot />
</div>