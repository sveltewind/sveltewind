<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTableCellAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLTableCellAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableCellElement | null;
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
		<th
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Th', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Th', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</th>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<th
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Th', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Th', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</th>
	{/if}
{:else if isVisible}
	<th
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Th', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Th', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</th>
{/if}
