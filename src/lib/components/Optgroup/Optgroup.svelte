<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLOptGroupAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLOptGroupAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLOptGroupElement | null;
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
		<optgroup
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Optgroup', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Optgroup', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</optgroup>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<optgroup
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Optgroup', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Optgroup', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</optgroup>
	{/if}
{:else if isVisible}
	<optgroup
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Optgroup', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Optgroup', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</optgroup>
{/if}
