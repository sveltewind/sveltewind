<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Label } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		group = $bindable(),
		handle,
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value,
		variants = ['default'],
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		group?: any;
		handle?: Snippet;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
		value?: any;
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('radio', variant)),
			group === value ? theme.getComponentVariant('radio', 'selected') : undefined,
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<Label class="group relative flex cursor-pointer">
		<input
			{...props}
			bind:this={elem}
			bind:group
			class="peer absolute left-0 top-0 w-0 opacity-0"
			type="radio"
			{value}
			transition:transitionHandler
			use:useAction={[...use]}
		/>
		{#if handle}
			{@render handle()}
		{:else}
			<div class={classes}></div>
		{/if}
		{#if children !== undefined}
			{@render children()}
		{/if}
	</Label>
{/if}
