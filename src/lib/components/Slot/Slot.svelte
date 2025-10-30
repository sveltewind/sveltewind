<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLSlotElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLSlotElement | null;
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
	<slot
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Slot', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Slot', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</slot>
{:else}
	<slot
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Slot', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Slot', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</slot>
{/if}
