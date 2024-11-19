<script lang="ts">
	// imports
	import { enhance } from '$app/forms';
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		action?: string;
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		method?: 'GET' | 'POST';
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLFormAttributes;

	// props
	let {
		action = $bindable(),
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		method = $bindable('POST'),
		this: elem = $bindable(),
		transition = $bindable(),
		use = $bindable([enhance]),
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('form', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLFormElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<form
		{...props}
		bind:this={elem}
		{action}
		class={classes}
		{method}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</form>
{/if}
