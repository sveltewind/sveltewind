<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGTextAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = SVGTextAttributes & {
		children?: Snippet;
		class?: string;
		element?: SVGTextElement | null;
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
		<text
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Text', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Text', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</text>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<text
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Text', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Text', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</text>
	{/if}
{:else if isVisible}
	<text
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Text', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Text', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</text>
{/if}
