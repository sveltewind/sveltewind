<script>
  // imports
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { getEvents, setType, use as useAction } from "../../actions";
  import { theme } from "../../stores";

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let disabled = false;
  export let style = undefined;
  export let type = "button";
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.button, $$props.class);
</script>

<button
  class={classes}
  {disabled}
  {style}
  use:useAction={[events, [setType, type], ...use]}
>
  <slot />
</button>
