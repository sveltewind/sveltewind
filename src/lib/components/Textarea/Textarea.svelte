<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTextareaAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLTextareaAttributes & {
		class?: string;
		element?: HTMLTextAreaElement | null;
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
		isVisible = $bindable(true),
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('textarea', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<textarea
		{...restProps}
		bind:this={element}
		bind:value
		class={classes}
		transition:transitionFn={transitionOptions}
	>
	</textarea>
{/if}
