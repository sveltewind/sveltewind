<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLTableCellElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLTableCellElement | null;
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
	<td
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Td', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Td', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</td>
{:else}
	<td
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Td', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Td', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</td>
{/if}
