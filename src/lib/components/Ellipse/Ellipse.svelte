<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGEllipseAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = SVGEllipseAttributes & {
		children?: Snippet;
		class?: string;
		element?: SVGEllipseElement | null;
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
		<ellipse
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Ellipse', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Ellipse', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</ellipse>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<ellipse
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Ellipse', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Ellipse', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</ellipse>
	{/if}
{:else if isVisible}
	<ellipse
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Ellipse', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Ellipse', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</ellipse>
{/if}
