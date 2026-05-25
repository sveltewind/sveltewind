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
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('select', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<select
		{...restProps}
		bind:this={element}
		bind:value
		class={classes}
		transition:transitionFn={transitionOptions}
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
