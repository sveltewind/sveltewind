<script>
  // imports
  import { twMerge } from "tailwind-merge";
  import { Button, ProgressIndicator } from "../index.js";

  // handlers

  // utilities

  // props (internal)

  // props (external)
  export let style = undefined;
  export let tabindex = undefined;
  export let submitted = false;
  export let type = "submit";
  export let use = [];

  // props (dynamic)
  $: classes = twMerge($$props.class);
</script>

<Button class={classes} on:click {type} {style} {tabindex} {use}>
  {#if submitted}
    <ProgressIndicator class="w-[1.5rem] h-[1.5rem]" />
  {:else}
    <slot />
  {/if}
</Button>
