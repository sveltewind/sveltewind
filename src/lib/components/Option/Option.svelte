<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLOptionAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLOptionAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLOptionElement | null;
		isVisible?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
		value?: any;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		isVisible = $bindable(true),
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = '',
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('option', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<option
		{...restProps}
		bind:this={element}
		class={classes}
		transition:transitionFn={transitionOptions}
		{value}
	>
		{#if children}
			{@render children()}
		{/if}
	</option>
{/if}
