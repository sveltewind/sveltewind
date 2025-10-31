<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLObjectAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLObjectAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLObjectElement | null;
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
		<object
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Object', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Object', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</object>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<object
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Object', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Object', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</object>
	{/if}
{:else if isVisible}
	<object
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Object', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Object', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</object>
{/if}
