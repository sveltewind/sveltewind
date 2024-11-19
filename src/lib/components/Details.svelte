<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { EventHandler, HTMLDetailsAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		ontoggle?: EventHandler<Event, HTMLDetailsElement> | null | undefined;
		open?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLDetailsAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		ontoggle = $bindable(),
		open = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('details', variant)),
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
	<details
		{...props}
		bind:this={elem}
		class={classes}
		{ontoggle}
		{open}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</details>
{/if}
