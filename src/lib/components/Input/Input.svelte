<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLInputAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		isVisible?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
		value?: string;
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
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('input', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<input
		{...restProps}
		bind:this={element}
		bind:value
		class={classes}
		transition:transitionFn={transitionOptions}
	/>
{/if}
