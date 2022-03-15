<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Button, ProgressIndicator } from '../index.js';

  // handlers

  // utilities

  // props (internal)

  // props (external)
  export let submitted = false;
  export let type = 'submit';

  // props (dynamic)
  $: classes = twMerge($$props.class);
</script>

<Button class={classes} {type}>
  {#if submitted}
    <ProgressIndicator class='w-[1.5rem] h-[1.5rem]' />
  {:else}
    <slot />
  {/if}
</Button>