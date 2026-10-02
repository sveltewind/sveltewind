<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLInputAttributes & {
		checked?: HTMLInputAttributes['checked'];
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		group?: HTMLInputAttributes['value'];
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		type?: HTMLInputAttributes['type'];
		value?: HTMLInputAttributes['value'];
		variants?: string[];
	};

	// $props
	let {
		checked = $bindable(),
		children,
		class: className = '',
		element = $bindable(null),
		group = $bindable(),
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		type = 'text',
		value = $bindable(type === 'checkbox' || type === 'radio' ? 'on' : ''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('input', variants, className));
	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});

	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	{#if type === 'checkbox'}
		<input
			{...restProps}
			bind:this={element}
			class={classes}
			in:inTransitionFn={inTransitionOptions}
			out:outTransitionFn={outTransitionOptions}
			bind:checked
			type="checkbox"
			{value}
		/>
	{:else if type === 'radio'}
		<input
			{...restProps}
			bind:this={element}
			class={classes}
			in:inTransitionFn={inTransitionOptions}
			out:outTransitionFn={outTransitionOptions}
			bind:group
			type="radio"
			{value}
		/>
	{:else if type === 'file'}
		<input
			{...restProps}
			bind:this={element}
			class={classes}
			in:inTransitionFn={inTransitionOptions}
			out:outTransitionFn={outTransitionOptions}
			{checked}
			{type}
			{value}
		/>
	{:else}
		<input
			{...restProps}
			bind:this={element}
			class={classes}
			in:inTransitionFn={inTransitionOptions}
			out:outTransitionFn={outTransitionOptions}
			bind:value
			{type}
		/>
	{/if}
{/if}
