<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLImgAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLImgAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLImageElement | null;
		isVisible?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
		inTransition?: TransitionProps;
		outTransition?: TransitionProps;
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
		inTransition,
		outTransition,
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('img', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});

	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<img
		{...restProps}
		bind:this={element}
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
	/>
{/if}
