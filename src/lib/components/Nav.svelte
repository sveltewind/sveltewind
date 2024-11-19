<script lang="ts">
	// imports
	import { twMerge } from 'tailwind-merge';
	import { theme } from '$lib/index.js';
	import { use as useAction } from '$lib/actions/index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLAttributes<HTMLElement>;

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
			...variants.map((variant: string) => theme.getComponentVariant('nav', variant)),
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
	<nav
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</nav>
{/if}
