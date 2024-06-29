<script lang="ts">
  // imports
  import { Card } from '$components/index.js';
  import { theme } from '$lib/index.js';
  import type { Snippet } from 'svelte';
  import { cubicInOut } from 'svelte/easing';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  const defaultTransition = (_: HTMLElement) => {
    return {
      duration,
      css: (t: number) => {
        const eased = cubicInOut(t);

        return `
          opacity: ${eased};
          transform: translateY(calc(-100% + ${(1 - t) * 0.5}rem)) translateX(-50%)`;
      }
    };
  };
  let {
    class: className = undefined,
    close = $bindable(),
    children,
    duration = $bindable(),
    isOpen = $bindable(),
    open = $bindable(),
    popover = $bindable(),
    text = $bindable(),
    toggle = $bindable(),
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    close?: () => void;
    children?: any;
    duration?: number;
    isOpen?: boolean;
    open?: () => void;
    popover?: Snippet;
    text?: string,
    toggle?: () => void;
    transition?: [(node: HTMLElement) => void, params?: any];
    use?: any[];
  } = $props();

  // effects
  $effect(() => {
    classes = twMerge(theme.get('popover'), className);
  });
  $effect(() => {
    if (close === undefined) close = () => (isOpen = false);
  });
  $effect(() => {
    if (duration === undefined) duration = 200
  });
  $effect(() => {
    if (isOpen === undefined) isOpen = false;
  });
  $effect(() => {
    if (open === undefined) open = () => (isOpen = true);
  });
  $effect(() => {
    if (text === undefined) text = 'Popover'
  });
  $effect(() => {
    if (toggle === undefined) toggle = () => (isOpen = !isOpen);
  });
  $effect(() => {
    if (transition === undefined) transition = [defaultTransition];
  });
</script>

<div class="relative">
  {#if children !== undefined}
    {@render children()}
  {/if}
  {#if popover}
    {#if isOpen}
      {@render popover()}
    {/if}
  {:else if isOpen}
    <Card {...props} class={classes} {transition} use={[...use]}>
      {text}
    </Card>
  {/if}
</div>
