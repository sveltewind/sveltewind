<script lang="ts">
	import { Button, Div, Li, Ol, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { StepperItem } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLOListElement> & {
		allowNavigation?: boolean;
		children?: Snippet;
		class?: string;
		current?: number;
		element?: HTMLOListElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		onStepChange?: ((index: number) => void) | undefined;
		outTransition?: TransitionProps;
		steps?: StepperItem[];
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		allowNavigation = false,
		children,
		class: className = '',
		current = $bindable(0),
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		onStepChange,
		outTransition,
		steps = [],
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('stepper', variants, className));
</script>

<Ol
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	aria-label={restProps['aria-label'] ?? 'Progress steps'}
	>{#each steps as step, index (index)}<Li
			{theme}
			class={theme.resolve('stepperItem')}
			aria-current={index === current ? 'step' : undefined}
			>{#if allowNavigation}<Button
					{theme}
					type="button"
					disabled={step.disabled}
					class={theme.resolve('stepperIndicator', [
						index < current ? 'complete' : index === current ? 'current' : 'upcoming'
					])}
					aria-label={`Step ${index + 1}: ${step.label}`}
					onclick={() => {
						current = index;
						onStepChange?.(index);
					}}>{index + 1}</Button
				>{:else}<Span
					{theme}
					class={theme.resolve('stepperIndicator', [
						index < current ? 'complete' : index === current ? 'current' : 'upcoming'
					])}>{index + 1}</Span
				>{/if}<Div {theme}
				><Span {theme} class={theme.resolve('stepperLabel')}>{step.label}</Span
				>{#if step.description}<Span {theme} class={theme.resolve('stepperDescription')}
						>{step.description}</Span
					>{/if}</Div
			></Li
		>{/each}{#if children}{@render children()}{/if}</Ol
>
