<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLOutputElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLOutputElement | null;
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
	<output
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Output', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Output', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</output>
{:else}
	<output
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Output', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Output', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</output>
{/if}
