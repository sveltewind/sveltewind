<script>
  // imports
  import { Icon } from "@steeze-ui/svelte-icon";
  import { twMerge } from "tailwind-merge";
  import { theme as themeStore } from "../../stores";

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = "";

  // props (external)
  export let src = undefined;
  export let style = undefined;
  export let tabindex = undefined;
  export let theme = undefined;

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $themeStore.icon, $$props.class);
</script>

{#if src !== undefined}
  <Icon class={classes} {src} {style} {tabindex} {theme} />
{/if}
