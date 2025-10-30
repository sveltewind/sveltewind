<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLTableRowElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableRowElement | null;
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
	<tr
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Tr', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Tr', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</tr>
{:else}
	<tr
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Tr', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Tr', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</tr>
{/if}
