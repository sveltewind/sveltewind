<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLOListAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLOListAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLOListElement | null;
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
		<ol
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Ol', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Ol', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</ol>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<ol
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Ol', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Ol', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</ol>
	{/if}
{:else if isVisible}
	<ol
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Ol', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Ol', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</ol>
{/if}
