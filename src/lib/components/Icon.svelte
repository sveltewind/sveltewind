<script lang="ts">
	import { theme as themeState } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let icon = $state('');
	let {
		class: className = undefined,
		size = $bindable(),
		src = $bindable(),
		theme = $bindable(),
		title = $bindable(),
		...props
	}: {
		class?: string;
		size?: string;
		src: any;
		theme?: string;
		title?: string;
	} = $props();

	// effects
	$effect(() => {
		classes = twMerge(themeState.get('icon'), className);
	});
	$effect(() => {
		if (size === undefined) size = '100%';
		if (size !== '100%') {
			if (size.slice(-1) != 'x' && size.slice(-1) != 'm' && size.slice(-1) != '%') {
				try {
					size = parseInt(size) + 'px';
				} catch (error) {
					size = '100%';
				}
			}
		}
	});
	$effect(() => {
		if (theme === undefined) theme = 'default';
	});
	$effect(() => {
		icon = src?.[theme] ?? src?.['default'];
	});
</script>

<svg
	{...props}
	class={classes}
	{...icon?.a}
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
>
	{#if title}
		<title>{title}</title>
	{/if}

	{#each icon?.path ?? [] as a}
		<path {...a} />
	{/each}
	{#each icon?.rect ?? [] as a}
		<rect {...a} />
	{/each}
	{#each icon?.circle ?? [] as a}
		<circle {...a} />
	{/each}
	{#each icon?.polygon ?? [] as a}
		<polygon {...a} />
	{/each}
	{#each icon?.polyline ?? [] as a}
		<polyline {...a} />
	{/each}
	{#each icon?.line ?? [] as a}
		<line {...a} />
	{/each}
</svg>
