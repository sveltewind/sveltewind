<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { Div } from '$lib/components';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: ((node: Element) => TransitionConfig) | null;
		isVisible?: boolean;
		outTransition?: ((node: Element) => TransitionConfig) | null;
		transitionTransition?: ((node: Element) => TransitionConfig) | null;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className,
		element = $bindable(null),
		inTransition = null,
		isVisible = $bindable(true),
		outTransition = null,
		transitionTransition = null,
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived

	// $effects
</script>

{#if transitionTransition !== null}
	<Div
		{...restProps}
		bind:element
		bind:isVisible
		class={twMerge(
			theme.getComponentVariant('Card', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Card', variant)
			),
			className
		)}
		{transitionTransition}
	>
		{#if children}
			{@render children()}
		{/if}
	</Div>
{:else if inTransition !== null && outTransition !== null}
	<Div
		{...restProps}
		bind:element
		bind:isVisible
		class={twMerge(
			theme.getComponentVariant('Card', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Card', variant)
			),
			className
		)}
		{inTransition}
		{outTransition}
	>
		{#if children}
			{@render children()}
		{/if}
	</Div>
{:else}
	<Div
		{...restProps}
		bind:element
		bind:isVisible
		class={twMerge(
			theme.getComponentVariant('Card', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Card', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</Div>
{/if}
