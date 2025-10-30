<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLElement | null;
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
	<i
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('I', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('I', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</i>
{:else}
	<i
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('I', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('I', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</i>
{/if}
