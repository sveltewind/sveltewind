<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { Input, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLInputAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		group?: any;
		handle?: Snippet;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		value?: any;
		variants?: string[];
	};

	// $props
	let {
		class: className = '',
		element = $bindable(null),
		group = $bindable(''),
		handle,
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = '',
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('radio', variants, className));

	// $effects
</script>

{#if handle}
	{#if isVisible}{@render handle()}{/if}
{:else}
	<Input
		{...restProps}
		bind:element
		bind:group
		bind:isVisible
		class={classes}
		{inTransition}
		{outTransition}
		{theme}
		{transition}
		variants={['unstyled']}
		type="radio"
		{value}
	/>
{/if}
