<script>
  // imports
  import { getEvents } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const events = getEvents(current_component);
  const defaultClasses = "";

  // props (external)
  export let style = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.h3, $$props.class);
</script>

<h3 class={classes} {style} use:events>
  <slot />
</h3>
