<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { setType } from '../../actions';
  import { theme } from '../../stores';

  // props (internal)
  const defaultClasses = '';

  // props (external)
  export let type = 'button';

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.button, $$props.class);
</script>

<button 
  class={classes}
  on:click
  use:setType={type}
>
  <slot />
</button>