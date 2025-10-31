<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLTextAreaAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLTextAreaAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLTextAreaElement | null;
		inTransition?: ((node: Element) => TransitionConfig) | null;
		isVisible?: boolean;
		outTransition?: ((node: Element) => TransitionConfig) | null;
		transitionTransition?: ((node: Element) => TransitionConfig) | null;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className,
		element = $bindable(null),
		inTransition = null,
		isVisible = $bindable(true),
		outTransition = null,
		transitionTransition = null,
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived

	// $effects
</script>

{#if transitionTransition !== null}
	{#if isVisible}
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
			transition:transitionTransition	/>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
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
			out:outTransition	/>
	{/if}
{:else if isVisible}
	<textarea
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Textarea', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Textarea', variant)
			),
			className
		)}	/>
{/if}
