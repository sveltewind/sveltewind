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
  export let action = undefined;
  export let method = "POST";
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.form, $$props.class);
</script>

<form
  {action}
  class={classes}
  {method}
  {style}
  use:useAction={[events, ...use]}
>
  <slot />
</form>
