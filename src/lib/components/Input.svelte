<script lang="ts">
  // imports
  import { setType, use as useAction } from '../actions/index.js';
  import { theme } from '$lib/stores/index.js';
  import { twMerge } from 'tailwind-merge';

  // props
  let classes = $state('');
  let {
    class: className = undefined,
    children,
    type = $bindable(),
    transition = $bindable(),
    use = [],
    value = $bindable(),
    ...props
  }: {
    class?: string;
    children?: any;
    type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week';
    transition?: [(node: HTMLElement) => void, params?: any];
    use?: any[];
    value?: string;
  } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };

  // effects
  $effect(() => {
    classes = twMerge(theme.get('input'), className);
  });
  $effect(() => {
    if (type === undefined) type = 'text';
  });
</script>

<input
  {...props}
  bind:value
  class={classes}
  transition:transitionHandler
  use:useAction={[[setType, type], ...use]}
/>
