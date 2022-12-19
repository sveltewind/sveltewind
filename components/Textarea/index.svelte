<script>
  // imports
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { getEvents, use as useAction } from "../../actions";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let style = undefined;
  export let tabindex = undefined;
  export let value = "";
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.textarea, $$props.class);
</script>

<textarea
  {...$$props}
  bind:value
  class={classes}
  {style}
  {tabindex}
  use:useAction={[events, ...use]}
/>
