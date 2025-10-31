<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLFormAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLFormAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLFormElement | null;
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
		<form
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Form', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Form', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</form>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<form
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Form', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Form', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</form>
	{/if}
{:else if isVisible}
	<form
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Form', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Form', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</form>
{/if}
