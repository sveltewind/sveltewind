<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Legend } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLFieldsetAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// type
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		legend?: string;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLFieldsetAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		legend = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('fieldset', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLFieldSetElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<fieldset
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if legend !== undefined}
			<Legend>{legend}</Legend>
		{/if}
		{#if children !== undefined}
			{@render children()}
		{/if}
	</fieldset>
{/if}
