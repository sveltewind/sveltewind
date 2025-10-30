<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLDataElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDataElement | null;
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
	<data
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Data', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Data', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</data>
{:else}
	<data
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Data', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Data', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</data>
{/if}
