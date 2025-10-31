<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLDivAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLDivAttributes & {
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
	{#if isVisible}
		<div
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Div', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Div', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<div
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Div', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Div', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/if}
{:else if isVisible}
	<div
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Div', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Div', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}
