<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLBRElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLBRElement | null;
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
	<br
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Br', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Br', variant)
			),
			className
		)}
		transition:transitionTransition/>
{:else}
	<br
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Br', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Br', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition/>
{/if}
