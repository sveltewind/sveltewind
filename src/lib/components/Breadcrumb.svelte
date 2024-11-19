<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Icon } from '$lib/components/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		href: string;
		items: string[] | undefined;
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
		href = '#',
		items = [],
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// effects
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('breadcrumb', variant)),
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
	<div
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children}
			{@render children()}
		{:else}
			{#each items as item, i}
				<div>{item}</div>
				{#if i < items.length - 1}
					<Icon src={ChevronRight} />
				{/if}
			{/each}
		{/if}
	</div>
{/if}
