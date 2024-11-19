<script lang="ts">
	// types
	type Props = {
		appStatusBarStyle?: string;
		themeColor: string;
		viewport?: string;
	} & any;

	// props
	let {
		appStatusBarStyle = $bindable('black-translucent'),
		themeColor = $bindable('#FFF'),
		viewport = $bindable(
			'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover'
		)
	}: Props = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" href="/icons/icon-apple-touch.png" />
	<link rel="alternate icon" href="/icons/icon-16x16.png" />
	<link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
	<link rel="manifest" href="/manifest.json" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content={appStatusBarStyle} />
	<meta name="theme-color" content={themeColor} />
	<meta name="viewport" content={viewport} />
</svelte:head>
