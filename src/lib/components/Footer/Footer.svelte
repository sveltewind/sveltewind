<script lang="ts">
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	// Types
	type Props = SvelteHTMLElements['footer'] & {
		children?: Snippet;
		class?: string;
		element?: HTMLElement | null;
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

	// $derived
	const classes = $derived(theme.resolve('footer', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});
	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});
</script>

{#if isVisible}
	<footer
		{...restProps}
		bind:this={element}
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
	>
		{#if children}
			{@render children()}
		{/if}
	</footer>
{/if}
