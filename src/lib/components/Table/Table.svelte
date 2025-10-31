<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTableAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLTableAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableElement | null;
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
		<table
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Table', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Table', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</table>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<table
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Table', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Table', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</table>
	{/if}
{:else if isVisible}
	<table
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Table', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Table', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</table>
{/if}
