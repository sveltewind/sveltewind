<script>
  // imports
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { getEvents, use as useAction } from "../../actions";
  import { Icon } from "../../components";
  import { ChevronRight } from "../../components/icons";
  import { theme } from "../../stores";

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let items = [];
  export let style = undefined;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge("", $theme.breadcrumb, $$props.class);
</script>

<div class={classes} {style} use:useAction={[events, ...use]}>
  <slot>
    {#each items as item, i}
      <div>{item}</div>
      {#if i < items.length - 1}
        <Icon src={ChevronRight} />
      {/if}
    {/each}
  </slot>
</div>
