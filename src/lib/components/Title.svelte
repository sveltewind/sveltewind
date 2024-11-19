<script lang="ts">
	// imports
	import { page } from '$app/stores';

	// props
	let {
		base = $bindable('')
	}: {
		base: string;
	} = $props();

	// derives
	const title = $derived.by(() => {
		return [
			...$page.url.pathname
				.slice(1)
				.split('/')
				.map((route: string) =>
					route
						.split('-')
						.map((string: string) =>
							string === '' ? 'Home' : string[0].toUpperCase() + string.slice(1)
						)
						.join(' ')
				)
				.reverse(),
			base
		].join(' - ');
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
