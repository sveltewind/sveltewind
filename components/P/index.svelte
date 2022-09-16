<script>
  // imports
  import { getEvents, use as useAction } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.p, $$props.class);
</script>

<p class={classes} {style} use:useAction={[events, ...use]}>
  <slot />
</p>
