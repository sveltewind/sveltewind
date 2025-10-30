<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLAnchorElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLAnchorElement | null;
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
	<a
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('ComponentName', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('ComponentName', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<a
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('ComponentName', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('ComponentName', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{/if}
