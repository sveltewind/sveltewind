<script>
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { X } from '../icons/index.js';
  import { twMerge } from 'tailwind-merge';
  import {
    Button,
    Card,
    H6,
    Icon,
    Overlay,
    P,
  } from '../../components/index.js';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = '';
  const events = getEvents(current_component);

  // props (external)
  export let body =
    "Here is where the modal's body is added.  Lorem ipsum dollar sit anet.";
  export let showBodyClose = true;
  export let showOverlay = true;
  export let showTitleClose = true;
  export let show = false;
  export let style = undefined;
  export let tabindex = undefined;
  export let title = 'Modal Title';
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(
    defaultClasses,
    show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    $theme.modal,
    $$props.class,
  );
</script>

<div class={classes} {style} {tabindex} use:useAction={[events, ...use]}>
  {#if showOverlay}
    <Overlay on:click={() => (show = !show)} class="cursor-pointer" />
  {/if}
  <slot>
    {#if showBodyClose !== false || showTitleClose !== false || title !== undefined}
      <div class="p-[1.5rem]">
        <Card
          class="relative space-y-[2rem] max-w-lg max-h-screen transform transition duration-500 {show
            ? 'scale-[1]'
            : 'scale-[.95]'}"
        >
          {#if showTitleClose !== false || title !== undefined}
            <div
              class="flex items-center {showTitleClose === true &&
              title !== undefined
                ? 'justify-between space-x-[2rem]'
                : showTitleClose === true
                ? 'justify-end'
                : 'justify-start'}"
            >
              {#if title !== undefined}
                <H6>{title}</H6>
              {/if}
              {#if showTitleClose !== false}
                <Button
                  class="bg-transparent hover:bg-black/5 focus:bg-black/5 focus:ring-black/30 text-black px-[.5rem]"
                  on:click={() => (show = !show)}
                >
                  <Icon src={X} />
                </Button>
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
      </div>
    {/if}
  </slot>
</div>
