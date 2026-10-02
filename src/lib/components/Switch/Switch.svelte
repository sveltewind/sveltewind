<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { Input, Label, noopTransition, Span } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = Omit<HTMLInputAttributes, 'type' | 'role'> & {
		checked?: boolean;
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		checked = $bindable(false),
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

	// $state

	// $derived
	const classes = $derived(theme.resolve('switch', variants, className));

	// $effects
</script>

<Label bind:isVisible class={classes} {inTransition} {outTransition} {theme} {transition}>
	<Input
		{...restProps}
		bind:checked
		bind:element
		class={theme.resolve('switchControl')}
		role="switch"
		{theme}
		type="checkbox"
	/>
	{#if children}<Span {theme}>{@render children()}</Span>{/if}
</Label>
