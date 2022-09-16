<script>
  // imports
  import { getEvents, use as useAction } from "../../actions";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores/index.js";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";
  const events = getEvents(current_component);

  // props (external)
  export let paginatedRowIndexes = {
    start: 0,
    end: 9,
  };
  export let style = undefined;
  export let total = 0;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(
    defaultClasses,
    $theme.paginationInfo.default,
    $$props.class
  );
</script>

<div class={classes} {style} use:useAction={[events, ...use]}>
  Showing
  {paginatedRowIndexes.start + 1}
  to
  {Math.min(paginatedRowIndexes.end + 1, total)}
  of
  {total}
</div>
