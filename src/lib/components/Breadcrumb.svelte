<script lang="ts">
  // imports
  import { use as useAction } from '$lib/actions/index.js';
  import { Icon } from '$lib/components/index.js';
  import { ChevronRight } from '$lib/icons/index.js';
  import { theme } from '$lib/stores/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    href = '#',
    items = [],
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    children?: any;
    href: string;
    items: string[] | undefined;
    transition?: [(node: HTMLElement) => void, params?: any]; use?: any[];
  } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };

  // effects
  $effect(() => {
    classes = twMerge(theme.get('breadbrumb'), className);
  });
</script>

<div {...props} class={classes} transition:transitionHandler use:useAction={[...use]}>
  {#if children !== undefined}
    {@render children()}
  {:else}
    {#each items as item, i}
      <div>{item}</div>
      {#if i < items.length - 1}
        <Icon src={ChevronRight} />
      {/if}
    {/each}
  {/if}
</div>
