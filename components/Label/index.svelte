<script>
  // imports
  import { getEvents } from "../../actions";
  // import {  } from '../../components';
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)

  // props (dynamic)
  $: classes = twMerge("", $$props.class);
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classes} use:events>
  <slot />
</label>
