<script>
  // imports

  // handlers

  // utilities

  // props (internal)

  // props (external)
  export let appStatusBarStyle = 'black-translucent';
  export let themeColor = "#FFF"
  export let viewport = "width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"

  // props (dynamic)
</script>

<svelte:head>
  <slot>
    <link rel="icon" type="image/svg+xml" href="/icon.svg" />
    <link rel="alternate icon" href="/icon-16x16.png" />
    <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="viewport" content={viewport} />
    <meta name="theme-color" content={themeColor} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content={appStatusBarStyle} />
  </slot>
</svelte:head>