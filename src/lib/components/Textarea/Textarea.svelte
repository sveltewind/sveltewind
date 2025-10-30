<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLTextAreaElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLTextAreaElement | null;
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
	<textarea
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Textarea', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Textarea', variant)
			),
			className
		)}
		transition:transitionTransition
	></textarea>
{:else}
	<textarea
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Textarea', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Textarea', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	></textarea>
{/if}
