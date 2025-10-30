<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLEmbedElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLEmbedElement | null;
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
	<embed
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Embed', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Embed', variant)
			),
			className
		)}
		transition:transitionTransition/>
{:else}
	<embed
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Embed', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Embed', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition/>
{/if}
