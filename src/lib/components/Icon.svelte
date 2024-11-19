<script lang="ts">
	import { theme as themeState } from '$lib/index.js';
	import type { SVGAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		isVisible?: boolean;
		size?: string;
		src: any;
		theme?: string;
		this?: any;
		title?: string;
		transition?: any[];
	} & SVGAttributes<SVGSVGElement>;

	// props
	let {
		class: className = undefined,
		isVisible = $bindable(true),
		size = $bindable('100%'),
		src = $bindable(),
		theme = $bindable('default'),
		this: elem = $bindable(),
		title = $bindable(),
		transition = $bindable(),
		...props
	}: Props = $props();

	// derives
	const classes = $derived(twMerge(themeState.getComponentVariant('icon', 'default'), className));
	const icon = $derived(src?.[theme] ?? src?.['default']);
	const transitionHandler = $derived.by(() => {
		return (node: SVGSVGElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<svg
		{...props}
		{...icon?.a}
		bind:this={elem}
		class={classes}
		height={size}
		transition:transitionHandler
		width={size}
		xmlns="http://www.w3.org/2000/svg"
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
{/if}
