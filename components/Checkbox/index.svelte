<script>
  // imports
  import { getEvents, use as useAction } from "../../actions";
  import { Icon, Label } from "../../components";
  import { Check } from "../../components/icons";
  import { current_component } from "svelte/internal";
  import { twMerge } from "tailwind-merge";
  import { theme } from "../../stores";

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let checked = false;
  export let use = [];

  // props (dynamic)
  $: classes = twMerge(
    "transition duration-200",
    $theme.checkbox,
    !checked ? "" : $theme.checkboxChecked,
    $$props.class
  );
</script>

<Label class="relative flex">
  <slot name="input">
    <input
      bind:checked
      class="peer absolute top-0 left-0 opacity-0 w-0"
      type="checkbox"
      use:useAction={[events, ...use]}
    />
  </slot>
  <slot name="handle">
    <div class={classes}>
      <Icon
        class="transition duration-200 transform {!checked
          ? 'scale-[0]'
          : 'scale-[1]'}"
        src={Check}
      />
    </div>
  </slot>
  <slot />
</Label>
