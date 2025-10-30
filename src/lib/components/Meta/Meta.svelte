<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLMetaElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLMetaElement | null;
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
		transition:transitionTransition/>
{:else}
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
		out:outTransition/>
{/if}
