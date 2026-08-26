<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGAttributes } from 'svelte/elements';
	import { noopTransition, Circle } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	type Props = SVGAttributes<SVGSVGElement> & {
		children?: Snippet;
		class?: string;
		element?: SVGSVGElement | null;
		isVisible?: boolean;
		strokeWidth?: string;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	let {
		children,
		class: className = '',
		element = $bindable(null),
		isVisible = $bindable(true),
		strokeWidth = '3',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let circleElement = $state<SVGCircleElement | null>(null);

	// $derives
	const classes = $derived(theme.resolve('spinner', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	$effect(() => {
		if (!element || !circleElement) return;

		const rotation = element.animate(
			[{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
			{
				duration: 2000,
				iterations: Infinity,
				easing: 'linear'
			}
		);

		const dash = circleElement.animate(
			[
				{
					strokeDasharray: '0 150',
					strokeDashoffset: '0'
				},
				{
					strokeDasharray: '42 150',
					strokeDashoffset: '-16',
					offset: 0.475
				},
				{
					strokeDasharray: '42 150',
					strokeDashoffset: '-59',
					offset: 0.95
				},
				{
					strokeDasharray: '42 150',
					strokeDashoffset: '-59'
				}
			],
			{
				duration: 1500,
				iterations: Infinity,
				easing: 'ease-in-out'
			}
		);

		return () => {
			rotation.cancel();
			dash.cancel();
		};
	});
</script>

{#if isVisible}
	<svg
		{...restProps}
		bind:this={element}
		class={classes}
		height="24"
		width="24"
		stroke="currentColor"
		transition:transitionFn={transitionOptions}
		viewBox="0 0 24 24"
	>
		{#if children}
			{@render children()}
		{:else}
			<Circle cx="12" cy="12" fill="none" r="9.5" stroke-width={strokeWidth} />
		{/if}
	</svg>
{/if}
