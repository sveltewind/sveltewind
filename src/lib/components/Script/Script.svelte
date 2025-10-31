<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLScriptAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLScriptAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLScriptElement | null;
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
		<script
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Script', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Script', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</script>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<script
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Script', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Script', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</script>
	{/if}
{:else if isVisible}
	<script
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Script', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Script', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</script>
{/if}
