<script lang="ts">
	import { Div, Img, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		name?: string;
		outTransition?: TransitionProps;
		src?: string | undefined;
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
		name = '',
		outTransition,
		src,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let failed = $state(false);

	// $derived
	const classes = $derived(theme.resolve('avatar', variants, className));
	const initials = $derived(
		name
			.trim()
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0])
			.join('')
			.toUpperCase() || '?'
	);

	// $effect
	$effect(() => {
		src;
		failed = false;
	});
</script>

<Div
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	role="img"
	aria-label={restProps['aria-label'] ?? (name || 'Avatar')}
>
	{#if src && !failed}<Img
			{theme}
			{src}
			alt=""
			aria-hidden="true"
			class={theme.resolve('avatarImage')}
			onerror={() => (failed = true)}
		/>{:else}<Span {theme} aria-hidden="true" class={theme.resolve('avatarFallback')}
			>{initials}</Span
		>{/if}
	{#if children}{@render children()}{/if}</Div
>
