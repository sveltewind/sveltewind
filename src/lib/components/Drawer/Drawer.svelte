<script lang="ts">
	import { Button, Dialog, Div, H2, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';

	// Types

	type Props = Omit<HTMLDialogAttributes, 'open'> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDialogElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		position?: 'left' | 'right';
		showClose?: boolean;
		theme?: Theme;
		title?: string;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(false),
		outTransition,
		position = 'right',
		showClose = true,
		theme = globalTheme,
		title = 'Panel',
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('drawer', [position, ...variants], className));
</script>

<Dialog
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	aria-label={restProps['aria-label'] ?? title}
	><Div {theme} class={theme.resolve('drawerHeader')}
		><H2 {theme} class={theme.resolve('drawerTitle')}>{title}</H2>{#if showClose}<Button
				{theme}
				type="button"
				variants={['ghost']}
				class={theme.resolve('drawerClose')}
				aria-label="Close panel"
				onclick={() => (isVisible = false)}><Span {theme} aria-hidden="true">&times;</Span></Button
			>{/if}</Div
	>{#if children}<Div {theme} class={theme.resolve('drawerContent')}>{@render children()}</Div
		>{/if}</Dialog
>
