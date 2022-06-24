<script>
  // imports
  import { Icon, Label } from "../../components";
  import { Check } from "../../components/icons";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores";

  // handlers

  // helpers

  // props (internal)

  // props (external)
  export let checked = false;

  // props (dynamic)
  $: classes = twMerge(
    "transition duration-200",
    $theme.checkbox,
    !checked ? "" : $theme.checkboxChecked,
    $$props.class
  );
</script>

<Label class="relative flex">
  <input
    bind:checked
    class="peer absolute top-0 left-0 opacity-0 w-0"
    type="checkbox" />
  <slot name="handle">
    <div class={classes}>
      <Icon
        class="transition duration-200 transform {!checked ? 'scale-[0]' : 'scale-[1]'}"
        src={Check} />
    </div>
  </slot>
  <slot />
</Label>
