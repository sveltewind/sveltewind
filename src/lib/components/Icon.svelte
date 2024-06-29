<script lang="ts">
  // imports
  import { Icon } from '@steeze-ui/svelte-icon';
  import { theme } from '$lib/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    src,
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    children?: any;
    src: any;
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
    classes = twMerge(theme.get('icon'), className);
  });
</script>

{#if src !== undefined}
  <Icon {...props} class={classes} {src} />
{/if}
