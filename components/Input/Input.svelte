<script>
  // imports
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { getEvents, setType } from "../../actions";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let style = undefined;
  export let type = "text";
  export let value = "";

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.input, $$props.class);
</script>

<input
  {...$$props}
  bind:value
  class={classes}
  {style}
  use:events
  use:setType={type} />
