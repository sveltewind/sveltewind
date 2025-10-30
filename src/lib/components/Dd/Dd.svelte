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
	<dd
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Dd', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Dd', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</dd>
{:else}
	<dd
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Dd', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Dd', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</dd>
{/if}
