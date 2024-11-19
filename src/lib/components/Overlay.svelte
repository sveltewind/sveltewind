<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLButtonAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		this: elem = $bindable(),
		transition = $bindable([fade, { duration: 200 }]),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('overlay', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLButtonElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<button
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</button>
{/if}
