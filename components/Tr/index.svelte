<script>
  // imports
  import { getEvents } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { Td } from "../../components/index.js";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let row = undefined;
  export let style = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.tr, $$props.class);
</script>

<tr class={classes} {style} use:events>
  {#if row !== undefined}
    {#each row as cell}
      <Td {cell} />
    {/each}
  {/if}
  <slot />
</tr>
