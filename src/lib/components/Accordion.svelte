<script lang="ts">
  // imports
  import { use as useAction } from '$lib/actions/index.js';
  import { Details, Summary } from '$lib/components/index.js';
  import { theme } from '$lib/index.js';
    import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    summary = $bindable(),
    title = $bindable(),
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    children?: any;
    summary?: Snippet;
    title?: string;
    transition?: [(node: HTMLElement) => void, params?: any];
    use?: any[];
  } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };

  // effects
  $effect(() => {
    classes = twMerge(theme.get('accordion'), className);
  });
  $effect(() => {
    if (title === undefined) title = 'Title';
  });
</script>

<Details {...props} class={classes} use={[...use]}>
  {#if summary}
    {@render summary()}
  {:else}
    <Summary>{title}</Summary>
  {/if}
  {#if children !== undefined}
    {@render children()}
  {/if}
</Details>
