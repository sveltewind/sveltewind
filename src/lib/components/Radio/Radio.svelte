<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { Div, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLInputAttributes & {
		class?: string;
		element?: HTMLInputElement | null;
		group?: any;
		handle?: Snippet;
		isVisible?: boolean;
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
		isVisible = $bindable(true),
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = '',
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('radio', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if handle}
	{@render handle()}
{:else}
	<input
		{...restProps}
		bind:group
		bind:this={element}
		class={classes}
		transition:transitionFn={transitionOptions}
		type="radio"
		{value}
	/>
{/if}
