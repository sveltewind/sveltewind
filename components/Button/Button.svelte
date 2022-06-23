<script>
  // imports
  import { getEvents } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { setType } from "../../actions";
  import { theme } from "../../stores";

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let disabled = false;
  export let style = undefined;
  export let type = "button";

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.button, $$props.class);
</script>

<button class={classes} {disabled} {style} use:events use:setType={type}>
  <slot />
</button>
