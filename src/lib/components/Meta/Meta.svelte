<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLMetaAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLMetaAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLMetaElement | null;
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
		<meta
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Meta', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Meta', variant)
				),
				className
			)}
			transition:transitionTransition	/>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<meta
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Meta', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Meta', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition	/>
	{/if}
{:else if isVisible}
	<meta
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Meta', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Meta', variant)
			),
			className
		)}	/>
{/if}
