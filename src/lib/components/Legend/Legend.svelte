<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLLegendElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLLegendElement | null;
		inTransition?: (node: Node) => TransitionConfig;
		outTransition?: (node: Node) => TransitionConfig;
		transitionTransition?: (node: Node) => TransitionConfig;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className,
		element,
		inTransition = (_: Node) => {
			return {};
		},
		outTransition = (_: Node) => {
			return {};
		},
		transitionTransition = (_: Node) => {
			return {};
		},
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived

	// $effects
</script>

{#if transitionTransition}
	<legend
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Legend', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Legend', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</legend>
{:else}
	<legend
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Legend', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Legend', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</legend>
{/if}
