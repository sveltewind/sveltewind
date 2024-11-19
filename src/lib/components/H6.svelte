<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLAttributes<HTMLHeadElement>;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('h6', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<h6
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</h6>
{/if}
