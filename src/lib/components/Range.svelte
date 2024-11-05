<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		max = $bindable(),
		min = $bindable(),
		step = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable(),
		variants = ['default'],
		...props
	}: {
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
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('range', variant)),
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
	$effect(() => {
		if (max === undefined) max = '100';
	});
	$effect(() => {
		if (min === undefined) min = '0';
	});
	$effect(() => {
		if (step === undefined) step = '1';
	});
	$effect(() => {
		if (value === undefined) value = '0';
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
