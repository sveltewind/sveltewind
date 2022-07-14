<script>
  // imports
  import { getEvents } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { Tr } from "../../components/index.js";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let data = undefined;
  export let rows = undefined;
  export let style = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.tbody, $$props.class);
</script>

<tbody class={classes} {style} use:events>
  {#if data !== undefined}
    {#each data as row}
      <Tr {row} />
    {/each}
  {/if}
  {#if rows !== undefined}
    {#each rows as row}
      <Tr {row} />
    {/each}
  {/if}
  <slot />
</tbody>
