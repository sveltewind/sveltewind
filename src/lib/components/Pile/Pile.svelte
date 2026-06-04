<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { noopTransition, Div } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
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
	const classes = $derived(theme.resolve('pile', variants, className));

	// $effects
</script>

<Div {...restProps} bind:element bind:isVisible class={classes} {transition}>
	{#if children}
		{@render children()}
	{/if}
</Div>
