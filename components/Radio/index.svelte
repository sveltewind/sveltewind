<script lang="ts">
  // imports
  import { getEvents, use as useAction } from '../../actions';
  import { Label } from '../../components';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // helpers

  // props (internal)
  const events = getEvents(current_component);

  // props (external)
  export let group: any = undefined;
  export let name: string | undefined = undefined;
  export let style = undefined;
  export let use = [];
  export let value: any = undefined;

  // props (dynamic)
  $: classes = twMerge(
    $theme.radio,
    group === value ? $theme.radioSelected : '',
    $$props.class
  );
</script>

<Label class="relative flex group cursor-pointer">
  <slot name="input">
    <input
      {...$$restProps}
      bind:group
      class="peer absolute top-0 left-0 opacity-0 w-0"
      {name}
      type="radio"
      {value}
      use:useAction={[events, ...use]}
    />
  </slot>
  <slot name="handle">
    <div class={classes} {style} />
  </slot>
  <slot />
</Label>
