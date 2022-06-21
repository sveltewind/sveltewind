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
  export let column = undefined;
  export let style = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.th, $$props.class);
</script>

<th class={classes} {style} use:events>
  {#if column !== undefined}{column}{/if}
  <slot />
</th>
