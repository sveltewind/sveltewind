<script lang="ts">
	// imports
	import { theme } from '$lib/index.js';
	import { use as useAction } from '$lib/actions/index.js';
	import { type Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		href: string;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLAnchorAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		href = '#',
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('a', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLAnchorElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<a
		{...props}
		bind:this={elem}
		class={classes}
		{href}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{/if}
