<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLElement | null;
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
		<rp
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Rp', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Rp', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</rp>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<rp
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Rp', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Rp', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</rp>
	{/if}
{:else if isVisible}
	<rp
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Rp', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Rp', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</rp>
{/if}
