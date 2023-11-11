<script>
  // imports
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { getEvents, use as useAction } from "../../actions";
  import { Overlay } from "../../components";
  import { theme } from "../../stores";

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);
  const positionClassDictionary = {
    left: { base: "left-0", false: "-translate-x-full", true: "translate-x-0" },
    right: { base: "right-0", false: "", true: "" },
    top: { base: "top-0", false: "", true: "" },
    bottom: { base: "bottom-0", false: "", true: "" },
  };

  // props (external)
  export let isOpen = false;
  export let position = "left";
  export let showOverlay = true;
  export let style = undefined;
  export const toggleIsOpen = () => (isOpen = !isOpen);
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(
    "",
    $theme.drawer,
    positionClassDictionary[position].base,
    positionClassDictionary[position][isOpen],
    $$props.class
  );
</script>

<div class={classes} {style} use:useAction={[events, ...use]}>
  <slot />
</div>
<slot name="overlay">
  {#if showOverlay}
    <Overlay
      class={!isOpen
        ? "pointer-events-none opacity-0"
        : "pointer-events-auto opacity-100"}
      on:click={toggleIsOpen}
    />
  {/if}
</slot>
