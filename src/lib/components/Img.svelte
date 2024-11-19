<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		alt: string;
		class?: string;
		isVisible?: boolean;
		src: string;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLImgAttributes;

	// props
	let {
		alt = $bindable(),
		class: className = undefined,
		isVisible = $bindable(true),
		src = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('img', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLImageElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<img
		{...props}
		{alt}
		bind:this={elem}
		class={classes}
		{src}
		transition:transitionHandler
		use:useAction={[...use]}
	/>
{/if}
