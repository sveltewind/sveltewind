<script lang="ts">
	import { type Snippet } from 'svelte';
	import { fly, type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { Card } from '$lib/components';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = {
		children?: Snippet;
		class?: string;
		containerSnippet?: Snippet;
		element?: HTMLDivElement | null;
		inTransition?: ((node: Element) => TransitionConfig) | null;
		isVisible?: boolean;
		outTransition?: ((node: Element) => TransitionConfig) | null;
		position?: 'bottom' | 'left' | 'right' | 'top';
		transitionTransition?: ((node: Element) => TransitionConfig) | null;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className,
		containerSnippet,
		element = $bindable(null),
		inTransition = null,
		isVisible = $bindable(false),
		outTransition = null,
		position = $bindable('bottom'),
		transitionTransition: customTransitionTransition = null,
		variants = [],
		...restProps
	}: Props = $props();

	const positionOptions = {
		bottom: {
			className: 'bottom-0 left-0 w-full max-w-lvw',
			transition: (element: Element) => fly(element, { duration: 200, opacity: 1, y: '100%' })
		},
		left: {
			className: 'top-0 left-0 h-full max-h-lvh',
			transition: (element: Element) => fly(element, { duration: 200, opacity: 1, x: '-100%' })
		},
		right: {
			className: 'top-0 right-0 h-full max-h-lvh',
			transition: (element: Element) => fly(element, { duration: 200, opacity: 1, x: '100%' })
		},
		top: {
			className: 'top-0 left-0 w-full max-w-lvw',
			transition: (element: Element) => fly(element, { duration: 200, opacity: 1, y: '-100%' })
		}
	};

	// $state

	// $derived
	const transitionTransition = $derived.by(() => {
		if (customTransitionTransition !== null) return customTransitionTransition;
		if (inTransition !== null && outTransition !== null) return null;
		return positionOptions?.[position].transition ?? null;
	});

	// $effects
</script>

{#if transitionTransition !== null}
	{#if containerSnippet}
		{@render containerSnippet()}
	{:else}
		<Card
			{...restProps}
			bind:element
			bind:isVisible
			class={twMerge(
				theme.getComponentVariant('Drawer', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Drawer', variant)
				),
				positionOptions?.[position].className,
				className
			)}
			{transitionTransition}
		>
			{#if children}
				{@render children()}
			{/if}
		</Card>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if containerSnippet}
		{@render containerSnippet()}
	{:else}
		<Card
			{...restProps}
			bind:element
			bind:isVisible
			class={twMerge(
				theme.getComponentVariant('Drawer', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Drawer', variant)
				),
				className
			)}
			{inTransition}
			{outTransition}
		>
			{#if children}
				{@render children()}
			{/if}
		</Card>
	{/if}
{:else if containerSnippet}
	{@render containerSnippet()}
{:else}
	<Card
		{...restProps}
		bind:element
		bind:isVisible
		class={twMerge(
			theme.getComponentVariant('Drawer', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Drawer', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</Card>
{/if}
