<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLLinkAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLLinkAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLLinkElement | null;
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
		<link
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Link', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Link', variant)
				),
				className
			)}
			transition:transitionTransition	/>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<link
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Link', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Link', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition	/>
	{/if}
{:else if isVisible}
	<link
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Link', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Link', variant)
			),
			className
		)}	/>
{/if}
