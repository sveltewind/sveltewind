<script lang="ts">
	import { Badge, Button, Combobox, Div, Input, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SelectOption } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		disabled?: boolean;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		label?: string;
		name?: string | undefined;
		onValueChange?: ((value: string[]) => void) | undefined;
		options?: SelectOption[];
		outTransition?: TransitionProps;
		placeholder?: string;
		theme?: Theme;
		transition?: TransitionProps;
		value?: string[];
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		disabled = false,
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		label = 'Choose options',
		name,
		onValueChange,
		options = [],
		outTransition,
		placeholder = 'Add an option...',
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable([]),
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let pending = $state('');

	// $derived
	const classes = $derived(theme.resolve('multiSelect', variants, className));
	const availableOptions = $derived(options.filter((option) => !value.includes(option.value)));

	// Helpers
	const add = (selected: string) => {
		if (disabled || !selected) return;
		value = [...value, selected];
		pending = '';
		onValueChange?.(value);
	};
	const remove = (selected: string) => {
		if (disabled) return;
		value = value.filter((entry) => entry !== selected);
		onValueChange?.(value);
	};
</script>

<Div
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
>
	<Combobox
		{theme}
		{disabled}
		{label}
		{placeholder}
		options={availableOptions}
		bind:value={pending}
		onValueChange={add}
	/>
	<Div {theme} class={theme.resolve('multiSelectValues')} aria-label="Selected options"
		>{#each value as selected (selected)}<Badge {theme} class={theme.resolve('multiSelectChip')}
				>{options.find((option) => option.value === selected)?.label ?? selected}<Button
					{theme}
					type="button"
					{disabled}
					variants={['ghost']}
					class={theme.resolve('multiSelectRemove')}
					aria-label={`Remove ${options.find((option) => option.value === selected)?.label ?? selected}`}
					onclick={() => remove(selected)}><Span {theme} aria-hidden="true">&times;</Span></Button
				></Badge
			>{#if name}<Input {theme} type="hidden" {name} value={selected} {disabled} />{/if}{/each}</Div
	>
	{#if children}{@render children()}{/if}</Div
>
