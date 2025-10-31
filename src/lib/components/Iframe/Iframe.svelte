<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLIFrameAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeComponentVariant } from '$lib/theme';

	// Types
	type Props = HTMLIFrameAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLIFrameElement | null;
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
		<iframe
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Iframe', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Iframe', variant)
				),
				className
			)}
			transition:transitionTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</iframe>
	{/if}
{:else if inTransition !== null && outTransition !== null}
	{#if isVisible}
		<iframe
			{...restProps}
			bind:this={element}
			class={twMerge(
				theme.getComponentVariant('Iframe', 'default'),
				...variants.map((variant: ThemeComponentVariant) =>
					theme.getComponentVariant('Iframe', variant)
				),
				className
			)}
			in:inTransition
			out:outTransition
		>
			{#if children}
				{@render children()}
			{/if}
		</iframe>
	{/if}
{:else if isVisible}
	<iframe
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Iframe', 'default'),
			...variants.map((variant: ThemeComponentVariant) =>
				theme.getComponentVariant('Iframe', variant)
			),
			className
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</iframe>
{/if}
