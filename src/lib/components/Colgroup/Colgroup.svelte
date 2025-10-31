<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTableColAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLTableColAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableColElement | null;
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
		<colgroup
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Colgroup', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Colgroup', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</colgroup>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<colgroup
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Colgroup', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Colgroup', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</colgroup>
	{/if}
{:else if isVisible}
	<colgroup
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Colgroup', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Colgroup', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</colgroup>
{/if}
