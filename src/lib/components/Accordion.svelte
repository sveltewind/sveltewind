<script lang="ts">
	// imports
	import { Details, Summary } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		isOpen?: boolean;
		summary?: Snippet;
		title?: string;
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
		isOpen = $bindable(false),
		summary = $bindable(),
		title = $bindable('Title'),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('accordion', variant)),
			className
		)
	);
</script>

<Details
	{...props}
	bind:isVisible
	bind:open={isOpen}
	bind:this={elem}
	class={classes}
	{transition}
	use={[...use]}
>
	{#if summary}
		{@render summary()}
	{:else}
		<Summary>{title}</Summary>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</Details>
