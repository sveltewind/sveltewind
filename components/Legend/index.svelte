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
  $: classes = twMerge(defaultClasses, $theme.legend, $$props.class);
</script>

<legend class={classes} {style} use:events>
  <slot />
</legend>
