<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { HTMLOptionAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		selected?: boolean;
		value: any;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLOptionAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		selected = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable(),
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('option', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLOptionElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<option
		{...props}
		bind:this={elem}
		class={classes}
		{selected}
		{value}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</option>
{/if}
