<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLModAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLModAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLModElement | null;
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
		<del
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Del', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Del', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</del>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<del
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Del', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Del', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</del>
	{/if}
{:else if isVisible}
	<del
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Del', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Del', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</del>
{/if}
