<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLLegendAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLLegendAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLLegendElement | null;
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
		<legend
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Legend', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Legend', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</legend>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<legend
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Legend', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Legend', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</legend>
	{/if}
{:else if isVisible}
	<legend
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Legend', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Legend', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</legend>
{/if}
