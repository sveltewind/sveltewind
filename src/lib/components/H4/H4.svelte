<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLHeadingAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLHeadingAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLHeadingElement | null;
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
		<h4
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('H4', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('H4', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</h4>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<h4
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('H4', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('H4', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</h4>
	{/if}
{:else if isVisible}
	<h4
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('H4', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('H4', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</h4>
{/if}
