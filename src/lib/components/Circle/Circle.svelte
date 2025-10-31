<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGCircleAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = SVGCircleAttributes & {
		children?: Snippet;
		class?: string;
		element?: SVGCircleElement | null;
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
		<circle
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Circle', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Circle', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</circle>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<circle
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Circle', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Circle', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</circle>
	{/if}
{:else if isVisible}
	<circle
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Circle', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Circle', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</circle>
{/if}
