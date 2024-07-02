<script lang="ts">
	// imports
	import { page } from '$app/stores';

	// props
	let {
		base = $bindable()
	}: {
		base: string;
	} = $props();
	let title = $state('');

	// effects
	$effect(() => {
		if (base === undefined) base = '';
		title = [
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
