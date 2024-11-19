<script lang="ts">
	// imports
	import { setType, use as useAction } from '../actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	// types
	type Props = {
		class?: string;
		children?: Snippet;
		isVisible?: boolean;
		type?:
			| 'button'
			| 'checkbox'
			| 'color'
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'file'
			| 'hidden'
			| 'image'
			| 'month'
			| 'number'
			| 'password'
			| 'radio'
			| 'range'
			| 'reset'
			| 'search'
			| 'submit'
			| 'tel'
			| 'text'
			| 'time'
			| 'url'
			| 'week';
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
		value?: string;
	} & HTMLInputAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		type = $bindable('text'),
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
			...variants.map((variant: string) => theme.getComponentVariant('input', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLInputElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
	$effect(() => {
		if (elem !== undefined) elem.type = type;
	});
</script>

{#if isVisible}
	<input
		{...props}
		bind:this={elem}
		bind:value
		class={classes}
		transition:transitionHandler
		use:useAction={[[setType, type], ...use]}
	/>
{/if}
