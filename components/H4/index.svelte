<script>
  // imports
  import { getEvents } from "../../actions";
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

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.h4, $$props.class);
</script>

<h4 class={classes} {style} use:events>
  <slot />
</h4>
