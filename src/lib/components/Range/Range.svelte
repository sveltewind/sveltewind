<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { noopTransition, Input, Div } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLInputAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		fill?: Snippet<[RangeData]>;
		isLabelVisible?: boolean;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		label?: Snippet<[RangeData]>;
		outTransition?: TransitionProps;
		max?: number;
		min?: number;
		step?: number;
		theme?: Theme;
		thumb?: Snippet<[RangeData]>;
		track?: Snippet<[RangeData]>;
		transition?: TransitionProps;
		value?: number;
		variants?: string[];
	};
	type RangeData = {
		max: number;
		min: number;
		percent: number;
		step: number;
		value: number;
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		fill,
		isLabelVisible = true,
		inTransition,
		isVisible = $bindable(true),
		label,
		max = 100,
		min = 0,
		outTransition,
		step = 1,
		theme = globalTheme,
		thumb,
		track,
		transition = [noopTransition, {}],
		value = $bindable(0),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('range', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});
	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});
	const percent = $derived(Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)));
	const rangeData = $derived({ max, min, percent, step, value });

	// $effects
</script>

{#if isVisible}
	<div
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
	>
		<Div class="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
			{#if track}
				{@render track(rangeData)}
			{:else}
				<Div class="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
			{/if}
		</Div>
		<Div
			class="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2"
			style="width:{percent}%;"
		>
			{#if fill}
				{@render fill(rangeData)}
			{:else}
				<Div class="h-1 w-full rounded-full bg-primary-500" />
			{/if}
		</Div>
		<Div
			class="pointer-events-none absolute top-1/2 h-full -translate-x-1/2 -translate-y-1/2"
			style="left:{percent}%;"
		>
			{#if thumb}
				{@render thumb(rangeData)}
			{:else}
				<Div
					class="aspect-square h-full rounded-full bg-gray-50 outline outline-gray-200 dark:bg-gray-950 dark:outline-gray-700"
				/>
			{/if}
		</Div>
		{#if label && isLabelVisible}
			{@render label(rangeData)}
		{:else if isLabelVisible}
			<Div
				class="pointer-events-none absolute top-0 -translate-x-1/2 -translate-y-full"
				style="left:{percent}%;"
			>
				{value}
			</Div>
		{/if}
		<Input
			{...restProps}
			bind:element
			bind:value
			class="absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none p-0 opacity-0"
			{min}
			{max}
			{step}
			type="range"
		/>
	</div>
{/if}
