<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLDetailsAttributes } from 'svelte/elements';
	import { Details, Div, noopTransition, Summary } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLDetailsAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLDetailsElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		open?: boolean;
		outTransition?: TransitionProps;
		summary?: Snippet | string;
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
		open = $bindable(false),
		outTransition,
		summary = 'Details',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('accordion', variants, className));

	// $effects
</script>

<Details
	{...restProps}
	bind:element
	bind:isVisible
	bind:open
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
>
	<Summary class={theme.resolve('accordionSummary')} {theme}>
		{#if typeof summary === 'string'}{summary}{:else}{@render summary()}{/if}
	</Summary>
	<Div class={theme.resolve('accordionContent')} {theme}>
		{#if children}{@render children()}{/if}
	</Div>
</Details>
