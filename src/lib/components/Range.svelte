<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		max?: string;
		min?: string;
		step?: string;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
		value: string;
	} & HTMLInputAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		max = $bindable('100'),
		min = $bindable('0'),
		step = $bindable('1'),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable('0'),
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('range', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLInputElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<input
		{...props}
		bind:this={elem}
		bind:value
		class={classes}
		{max}
		{min}
		{step}
		transition:transitionHandler
		type="range"
		use:useAction={[...use]}
	/>
{/if}
