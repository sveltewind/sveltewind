<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { X } from 'svelte-hero-icons';
  import { Button, Card, H6, Icon, Overlay, P } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let body;
  export let showBodyClose = false;
  export let showOverlay = true;
  export let showTitleClose = false;
  export let show = false;
  export let title;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none', $theme.modal, $$props.class);
</script>

<div
  class={classes}
>
  {#if showOverlay}
    <Overlay on:click={() => show = !show} class="cursor-pointer" />
  {/if}
  {#if showBodyClose !== false || showTitleClose !== false || title !== undefined}
    <Card class="relative space-y-[2rem] max-w-lg max-h-screen">
      {#if showTitleClose !== false || title !== undefined}
        <div class="flex items-center {showTitleClose === true && title !== undefined ? 'justify-between space-x-[2rem]' : showTitleClose === true ? 'justify-end' : 'justify-start'}">
          {#if title !== undefined}
            <H6>{title}</H6>
          {/if}
          {#if showTitleClose !== false}
          <Button
            class="bg-transparent hover:bg-black/5 focus:bg-black/5 focus:ring-black/30 text-black px-[.5rem]"
            on:click={() => (show = !show)}><Icon src={X} /></Button
          >
          {/if}
        </div>
      {/if}
      {#if body !== undefined}
        <P class="overflow-auto">{body}</P>
      {/if}
      {#if showBodyClose !== false}
        <div class="flex justify-end">
          <Button on:click={() => (show = !show)}>Close</Button>
        </div>
      {/if}
    </Card>
  {/if}
  <slot />
</div>