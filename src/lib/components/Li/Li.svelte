<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLLiAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLLiAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLLIElement | null;
		isVisible?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
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
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('li', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<li
		{...restProps}
		bind:this={element}
		class={classes}
		transition:transitionFn={transitionOptions}
	>
		{#if children}
			{@render children()}
		{/if}
	</li>
{/if}
