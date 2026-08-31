<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tooltipStore } from '$lib/attachments/tooltip';
	import { twMerge } from 'tailwind-merge';
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
	let top = $state(0);

	// $derived
	const classes = $derived(theme.resolve('tooltip', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitioOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});
	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitioOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});
	const tooltipState = $derived(tooltipStore.state);
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
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

{#if tooltipState}
	<div
		{...restProps}
		{@attach portal()}
		bind:this={element}
		class={twMerge(classes)}
		in:inTransitionFn={inTransitioOptions}
		out:outTransitionFn={outTransitioOptions}
		style:left={`${left}px`}
		style:top={`${top}px`}
	>
		{#if typeof tooltipState.content === 'string'}
			{#if children}
				{@render children(tooltipState.content)}
			{:else}
				<Card>
					{tooltipState.content}
				</Card>
			{/if}
		{:else}
			{@render tooltipState.content()}
		{/if}
	</div>
{/if}
