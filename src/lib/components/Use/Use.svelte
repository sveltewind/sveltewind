<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGUseAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = SVGUseAttributes & {
		children?: Snippet;
		class?: string;
		element?: SVGUseElement | null;
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
	{#if isVisible}
		<use
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Use', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Use', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</use>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<use
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Use', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Use', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</use>
	{/if}
{:else if isVisible}
	<use
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Use', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Use', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</use>
{/if}
