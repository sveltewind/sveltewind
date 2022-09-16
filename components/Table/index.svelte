<script>
  // imports
  import { getEvents, use as useAction } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { Tbody, Thead } from "../../components/index.js";
  import { theme } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let columns = undefined;
  export let data = undefined;
  export let rows = undefined;
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.table, $$props.class);
</script>

<table class={classes} {style} use:useAction={[events, ...use]}>
  {#if columns !== undefined && rows !== undefined}
    <Thead {columns} />
    <Tbody {columns} {rows} />
  {/if}
  {#if data !== undefined}
    <Tbody {data} />
  {/if}
  <slot />
</table>
