<script lang="ts">
  // props
  let {
    appStatusBarStyle = $bindable(),
    children,
    themeColor = $bindable(),
    viewport = $bindable(),
  }: {
    appStatusBarStyle?: string;
    children?: any;
    themeColor: string;
    viewport?: string;
  } = $props();
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
