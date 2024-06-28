<script lang="ts">
  import { Button, Card, Icon } from '$components/index.js';
  import { Clipboard } from '$lib/icons/index.js';
  import type { Snippet } from 'svelte';
  import { cubicInOut } from 'svelte/easing';

  // handlers
  const clickHandler = async () => {
    if (navigator?.clipboard?.writeText) await navigator.clipboard.writeText(code);
    isOpen = true;
    setTimeout(() => {
      isOpen = false;
    }, 1000);
  };

  // props
  let {
    code = $bindable(),
    icon,
    isOpen = $bindable()
  }: {
    code: string;
    icon?: Snippet;
    isOpen: boolean;
  } = $props();

  // effects
  $effect(() => {
    if (code === undefined) code = '';
  });
  $effect(() => {
    if (isOpen === undefined) isOpen = false;
  });

  // transition
  const transition = (_: HTMLElement) => {
    return {
      duration: 200,
      css: (t: number) => {
        const eased = cubicInOut(t);

        return `
          opacity: ${eased};
          transform: translateY(calc(-100% + ${(1 - t) * 0.5}rem)) translateX(-50%)`;
      }
    };
  };
</script>

<div class="relative">
  <Button
    class="p-2 bg-transparent hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
    onclick={clickHandler}
  >
    {#if icon !== undefined}
      {@render icon()}
    {:else}
      <Icon class="w-5 h-5" src={Clipboard} />
    {/if}
  </Button>
  {#if isOpen}
    <Card
      class="absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full py-0 px-2"
      transition={[transition]}
    >
      Copied!
    </Card>
  {/if}
</div>
