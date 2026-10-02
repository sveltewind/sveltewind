<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLSpanElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLSpanElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('badge', variants, className));

	// $effects
</script>

<Span
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
>
	{#if children}{@render children()}{/if}
</Span>
