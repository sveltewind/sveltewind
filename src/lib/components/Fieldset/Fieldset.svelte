<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { type TransitionConfig } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { theme, type ThemeVariant } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLFieldSetElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLFieldSetElement | null;
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
	<fieldset
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Fieldset', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Fieldset', variant)
			),
			className
		)}
		transition:transitionTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</fieldset>
{:else}
	<fieldset
		{...restProps}
		bind:this={element}
		class={twMerge(
			theme.getComponentVariant('Fieldset', 'default'),
			...variants.map((variant: ThemeVariant) =>
				theme.getComponentVariant('Fieldset', variant)
			),
			className
		)}
		in:inTransition
		out:outTransition
	>
		{#if children}
			{@render children()}
		{/if}
	</fieldset>
{/if}
