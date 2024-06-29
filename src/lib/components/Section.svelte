<script lang="ts">
  // imports
  import { use as useAction } from '$lib/actions/index.js';
  import { theme } from '$lib/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    transition = $bindable(),
    use = [],
    ...props
  }: { class?: string; children?: any; transition?: [(node: HTMLElement) => void, params?: any]; use?: any[] } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };

  // effects
  $effect(() => {
    classes = twMerge(theme.get('section'), className);
  });
</script>

<section {...props} class={classes} transition:transitionHandler use:useAction={[...use]}>
  {#if children !== undefined}
    {@render children()}
  {/if}
</section>
