<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLDetailsAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
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
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('details', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});

	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<details
		{...restProps}
		bind:this={element}
		bind:open
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
	>
		{#if children}
			{@render children()}
		{/if}
	</details>
{/if}
