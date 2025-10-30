<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLHeadingElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLHeadingElement | null;
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
	<h3
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('H3', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('H3', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</h3>
{:else}
	<h3
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('H3', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('H3', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</h3>
{/if}
