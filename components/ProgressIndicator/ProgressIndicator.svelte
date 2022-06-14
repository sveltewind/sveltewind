<script>
  // imports
  import { getEvents } from '../../actions';
  import { current_component } from 'svelte/internal';
  import { twMerge } from 'tailwind-merge';
  import { theme } from '../../stores';

  // handlers

  // utilities

  // props (internal)
  const defaultClasses = 'spinner-rotate w-[6.25rem] h-[6.25rem]';
  const events = getEvents(current_component);

  // props (external)

  // props (dynamic)
  $: classes = twMerge(defaultClasses, $theme.progressIndicator, $$props.class);
</script>

<style>
  @keyframes spinner-dash {
    0% {
      stroke-dasharray : 1, 200;
      stroke-dashoffset: 0
    }
    50% {
      stroke-dasharray : 89, 200;
      stroke-dashoffset: -35px
    }
    100% {
      stroke-dasharray : 89, 200;
      stroke-dashoffset: -124px
    }
  }
  @keyframes spinner-rotate {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  .spinner-dash {
    animation: spinner-dash 1.5s ease-in-out infinite;
  }
  .spinner-rotate {
    animation: spinner-rotate 2s linear infinite;
  }
</style>

<svg class={classes} viewBox="25 25 50 50" use:events>
  <circle class="spinner-dash" cx="50" cy="50" r="20" stroke="currentColor" fill="none" stroke-width="2" stroke-miterlimit="10"/>
</svg>