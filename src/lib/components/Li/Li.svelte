<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLLIAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLLIAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLLIElement | null;
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
		<li
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Li', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Li', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</li>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<li
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Li', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Li', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</li>
	{/if}
{:else if isVisible}
	<li
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Li', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Li', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</li>
{/if}
