<script lang="ts">
  // props
  let classes = $state('');
  let {
    appStatusBarStyle = $bindable(),
    class: className = undefined,
    children,
    themeColor = $bindable(),
    transition = $bindable(),
    use = [],
    viewport = $bindable(),
    ...props
  }: {
    appStatusBarStyle?: string;
    class?: string;
    children?: any;
    themeColor?: string;
    transition?: [(node: HTMLElement) => void, params?: any]; use?: any[];
    viewport?: string;
  } = $props();
  const transitionHandler = (node: HTMLElement) => {
    if (transition === undefined) return;
    if (transition.length === 1) return transition[0](node);
    return transition[0](node, transition[1]);
  };
  $effect(() => {
    if (appStatusBarStyle === undefined) appStatusBarStyle = 'black-translucent';
  });
  $effect(() => {
    if (themeColor === undefined) themeColor = '#FFF';
  });
  $effect(() => {
    if (viewport === undefined)
      viewport = 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover';
  });
</script>

<svelte:head>
  <link rel="apple-touch-icon" href="/icons/icon-apple-touch.png" />
  <link rel="alternate icon" href="/icons/icon-16x16.png" />
  <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content={appStatusBarStyle} />
  <meta name="theme-color" content={themeColor} />
  <meta name="viewport" content={viewport} />
  {#if children !== undefined}
    {@render children()}
  {/if}
</svelte:head>
