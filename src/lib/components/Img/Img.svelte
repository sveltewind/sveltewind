<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLImageElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLImageElement | null;
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
	<img
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Img', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Img', variant)
			),
			className
		)}
		transition:transitionTransition/>
{:else}
	<img
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Img', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Img', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition/>
{/if}
