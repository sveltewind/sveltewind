<script>
  // imports
  import { getEvents } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores";

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let href = "#";
  export let style = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.a, $$props.class);
</script>

<a class={classes} {href} {style} use:events>
  <slot />
</a>
