<script lang="ts">
  // imports
  import { use as useAction } from '$lib/actions/index.js';
  import { Icon, Label } from '$lib/components/index.js';
  import { Check } from '$lib/icons/index.js';
  import { theme } from '$lib/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    checked = $bindable(),
    children,
    transition = $bindable(),
    use = [],
    ...props
  }: {
    class?: string;
    checked?: boolean;
    children?:any;
    transition?: [(node: HTMLElement) => void, params?: any]; use?: any[];
  } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };

  // effects
  $effect(() => {
    classes = twMerge(theme.get('checkbox'), className);
  });
  $effect(() => {
    if (checked === undefined) checked = false;
  });
</script>

<Label class="relative flex group cursor-pointer">
  <input
    {...props}
    bind:checked
    class="peer absolute top-0 left-0 opacity-0 w-0"
    type="checkbox"
    transition:transitionHandler use:useAction={[...use]}
  />
  <div class={classes}>
    <Icon
      class="transition duration-200 transform {!checked ? 'scale-[0]' : 'scale-[1]'}"
      src={Check}
    />
  </div>
  {#if children !== undefined}
    {@render children()}
  {/if}
</Label>
