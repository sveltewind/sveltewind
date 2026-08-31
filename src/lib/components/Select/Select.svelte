<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLSelectAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import Option from '../Option/Option.svelte';

	// Types
	type Props = HTMLSelectAttributes & {
		children?: Snippet;
		class?: string;
		element?: HTMLSelectElement | null;
		isVisible?: boolean;
		options?: { label: any; value: any }[];
		theme?: Theme;
		transition?: TransitionProps;
		inTransition?: TransitionProps;
		outTransition?: TransitionProps;
		value?: any;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		isVisible = $bindable(true),
		options = $bindable([]),
		theme = globalTheme,
		transition = [noopTransition, {}],
		inTransition,
		outTransition,
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('select', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});

	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<select
		{...restProps}
		bind:this={element}
		bind:value
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
	>
		{#if children}
			{@render children()}
		{:else}
			{#each options as option}
				<Option value={option.value}>
					{option.label}
				</Option>
			{/each}
		{/if}
	</select>
{/if}
