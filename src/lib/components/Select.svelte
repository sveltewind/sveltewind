<script lang="ts">
  // imports
  import { use as useAction } from '$lib/actions/index.js';
  import { Option } from '$lib/components/index.js';
  import { theme } from '$lib/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    options = $bindable(),
    value = $bindable(),
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    children?: any;
    options?: { label: string; value: any }[];
    value: any;
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
    classes = twMerge(theme.get('select'), className);
  });
</script>

<select {...props} bind:value class={classes} transition:transitionHandler use:useAction={[...use]}>
  {#if options !== undefined}
    {#each options as option}
      <Option selected={option.value === value} value={option.value}>
        {option.label}
      </Option>
    {/each}
  {:else if children !== undefined}
    <!-- {@render children()} -->
  {/if}
</select>
