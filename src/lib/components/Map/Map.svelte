<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLMapElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLMapElement | null;
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
	<map
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Map', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Map', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</map>
{:else}
	<map
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Map', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Map', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</map>
{/if}
