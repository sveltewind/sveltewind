<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Div, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tooltipStore } from '$lib/attachments/tooltip';
	import Card from '../Card/Card.svelte';
	import { portal } from '$lib/attachments';

	// Types
	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet<[string]>;
		class?: string;
		element?: HTMLDivElement | null;
		gap?: number;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// helpers
	const updatePosition = () => {
		if (!tooltipState || !element) return;

		const triggerRect = tooltipState.parentElement.getBoundingClientRect();
		const tooltipRect = element.getBoundingClientRect();

		switch (tooltipState.placement) {
			case 'top':
				top = triggerRect.top - tooltipRect.height - gap;
				left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
				break;

			case 'right':
				top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
				left = triggerRect.right + gap;
				break;

			case 'bottom':
				top = triggerRect.bottom + gap;
				left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
				break;

			case 'left':
				top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
				left = triggerRect.left - tooltipRect.width - gap;
				break;
		}
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		gap = 8,
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let left = $state(0);
	let renderedTooltipState = $state<typeof tooltipStore.state>(null);
	let top = $state(0);

	// $derived
	const classes = $derived(theme.resolve('tooltip', variants, className));
	const tooltipState = $derived(tooltipStore.state);

	// $effects
	$effect(() => {
		// Keep the last content mounted while the primitive runs its exit transition.
		if (tooltipState) renderedTooltipState = tooltipState;
	});

	$effect(() => {
		if (!tooltipState) return;

		updatePosition();

		window.addEventListener('resize', updatePosition);
		window.addEventListener('scroll', updatePosition, true);

		return () => {
			window.removeEventListener('resize', updatePosition);
			window.removeEventListener('scroll', updatePosition, true);
		};
	});
</script>

<Div
	{...restProps}
	{@attach portal()}
	bind:element
	class={classes}
	{inTransition}
	isVisible={isVisible && !!tooltipState}
	{outTransition}
	style={`${restProps.style ?? ''}; left: ${left}px; top: ${top}px;`}
	{theme}
	{transition}
>
	{#if renderedTooltipState}
		{#if typeof renderedTooltipState.content === 'string'}
			{#if children}
				{@render children(renderedTooltipState.content)}
			{:else}
				<Card {theme}>{renderedTooltipState.content}</Card>
			{/if}
		{:else}
			{@render renderedTooltipState.content()}
		{/if}
	{/if}
</Div>
