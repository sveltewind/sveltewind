<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLFieldSetAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLFieldSetAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLFieldSetElement | null;
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
		<fieldset
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Fieldset', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Fieldset', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</fieldset>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<fieldset
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Fieldset', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Fieldset', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</fieldset>
	{/if}
{:else if isVisible}
	<fieldset
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Fieldset', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Fieldset', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</fieldset>
{/if}
