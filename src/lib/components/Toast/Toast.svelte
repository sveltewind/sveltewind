<script lang="ts">
	import { Alert, Button, Div, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ToastStatus } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		duration?: number;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		message?: string;
		onDismiss?: (() => void) | undefined;
		outTransition?: TransitionProps;
		status?: ToastStatus;
		theme?: Theme;
		title?: string;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		duration = 5000,
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		message = '',
		onDismiss,
		outTransition,
		status = 'info',
		theme = globalTheme,
		title = '',
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let focused = $state(false);
	let hovered = $state(false);

	// $derived
	const classes = $derived(theme.resolve('toast', variants, className));

	// Helpers
	const dismiss = () => {
		isVisible = false;
		onDismiss?.();
	};

	// $effect
	$effect(() => {
		if (!isVisible || focused || hovered || duration <= 0) return;
		const timer = setTimeout(dismiss, duration);
		return () => clearTimeout(timer);
	});
</script>

<Alert
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	variants={[status]}
	role={restProps.role ?? (status === 'error' ? 'alert' : 'status')}
	onmouseenter={(event) => {
		restProps.onmouseenter?.(event);
		hovered = true;
	}}
	onmouseleave={(event) => {
		restProps.onmouseleave?.(event);
		hovered = false;
	}}
	onfocusin={(event) => {
		restProps.onfocusin?.(event);
		focused = true;
	}}
	onfocusout={(event) => {
		restProps.onfocusout?.(event);
		if (!(event.relatedTarget instanceof Node) || !element?.contains(event.relatedTarget))
			focused = false;
	}}
>
	<Div {theme} class={theme.resolve('toastContent')}
		>{#if title}<Span {theme} class={theme.resolve('toastTitle')}>{title}</Span
			>{/if}{#if children}{@render children()}{:else}{message}{/if}</Div
	><Button
		{theme}
		type="button"
		variants={['ghost']}
		class={theme.resolve('toastClose')}
		aria-label="Dismiss notification"
		onclick={dismiss}><Span {theme} aria-hidden="true">&times;</Span></Button
	></Alert
>
