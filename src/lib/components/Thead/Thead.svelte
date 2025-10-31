<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTableSectionAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLTableSectionAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableSectionElement | null;
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
		<thead
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Thead', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Thead', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</thead>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<thead
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Thead', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Thead', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</thead>
	{/if}
{:else if isVisible}
	<thead
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Thead', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Thead', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</thead>
{/if}
