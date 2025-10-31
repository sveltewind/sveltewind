<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLDialogAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLDialogAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLDialogElement | null;
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
		<dialog
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Dialog', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Dialog', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</dialog>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<dialog
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Dialog', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Dialog', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</dialog>
	{/if}
{:else if isVisible}
	<dialog
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Dialog', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Dialog', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</dialog>
{/if}
