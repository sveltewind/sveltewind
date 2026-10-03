<script lang="ts">
	import { Div, Toast, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ToastItem } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		onDismiss?: ((id: string) => void) | undefined;
		outTransition?: TransitionProps;
		position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
		theme?: Theme;
		toasts?: ToastItem[];
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
		onDismiss,
		outTransition,
		position = 'bottom-right',
		theme = globalTheme,
		toasts = $bindable([]),
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('toaster', [position, ...variants], className));

	// Helpers
	const dismiss = (id: string) => {
		toasts = toasts.filter((toast) => toast.id !== id);
		onDismiss?.(id);
	};
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
	role="region"
	aria-label={restProps['aria-label'] ?? 'Notifications'}
>
	{#each toasts as toast (toast.id)}<Toast
			{theme}
			duration={toast.duration}
			message={toast.message}
			status={toast.status}
			title={toast.title}
			onDismiss={() => dismiss(toast.id)}
		/>{/each}{#if children}{@render children()}{/if}</Div
>
