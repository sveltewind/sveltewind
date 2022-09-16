<script>
  // imports
  import { getEvents, use as useAction } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let use = [];

  // props (dynamic)
  $: classes = twMerge("", $$props.class);
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classes} use:useAction={[events, ...use]}>
  <slot />
</label>
