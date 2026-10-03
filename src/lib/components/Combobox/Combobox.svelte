<script lang="ts">
	import { Div, Input, Label, Li, Popover, Span, Ul, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tick, type Snippet } from 'svelte';
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
		onValueChange?: ((value: string) => void) | undefined;
		open?: boolean;
		options?: SelectOption[];
		outTransition?: TransitionProps;
		placeholder?: string;
		required?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
		value?: string;
		variants?: string[];
	};

	// Constants
	const uid = $props.id();

	// $props
	let {
		children,
		class: className = '',
		disabled = false,
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		label = 'Choose an option',
		name,
		onValueChange,
		open = $bindable(false),
		options = [],
		outTransition,
		placeholder = 'Search options...',
		required = false,
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let activeIndex = $state(-1);
	let input = $state<HTMLInputElement | null>(null);
	let query = $state('');

	// $derived
	const classes = $derived(theme.resolve('combobox', variants, className));
	const filtered = $derived(
		options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
	);
	const selectedLabel = $derived(options.find((option) => option.value === value)?.label ?? '');

	// Helpers
	const choose = (option: SelectOption) => {
		if (disabled || option.disabled) return;
		value = option.value;
		query = option.label;
		open = false;
		onValueChange?.(value);
		input?.focus();
	};
	const handleKey = (event: KeyboardEvent) => {
		if (disabled) return;
		if (event.key === 'Escape') {
			event.preventDefault();
			open = false;
			return;
		}
		if (event.key === 'Tab') {
			open = false;
			return;
		}
		if (event.key === 'Enter') {
			if (open) {
				event.preventDefault();
				const option = filtered[activeIndex];
				if (option) choose(option);
			}
			return;
		}
		if (
			event.key !== 'ArrowDown' &&
			event.key !== 'ArrowUp' &&
			!(open && (event.key === 'Home' || event.key === 'End'))
		)
			return;
		event.preventDefault();
		if (!open) {
			query = '';
			open = true;
		}
		const indices = filtered.map((option, i) => (option.disabled ? -1 : i)).filter((i) => i >= 0);
		if (!indices.length) {
			activeIndex = -1;
			return;
		}
		const index = indices.indexOf(activeIndex);
		if (event.key === 'Home') activeIndex = indices[0];
		else if (event.key === 'End') activeIndex = indices[indices.length - 1];
		else
			activeIndex =
				index < 0
					? indices[event.key === 'ArrowUp' ? indices.length - 1 : 0]
					: indices[(index + (event.key === 'ArrowUp' ? -1 : 1) + indices.length) % indices.length];
		void tick().then(() =>
			document.getElementById(`${uid}-option-${activeIndex}`)?.scrollIntoView({ block: 'nearest' })
		);
	};

	// $effect
	$effect(() => {
		if (!open) query = selectedLabel;
	});
	$effect(() => {
		if (disabled) open = false;
		if (activeIndex >= filtered.length) activeIndex = -1;
	});
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
	<Popover
		{theme}
		bind:isVisible={open}
		trigger={searchTrigger}
		class={theme.resolve('comboboxPanel')}
	>
		<Ul
			{theme}
			id={`${uid}-list`}
			variants={['plain']}
			role="listbox"
			aria-label={label}
			class={theme.resolve('comboboxList')}
		>
			{#each filtered as option, index (option.value)}<Li
					{theme}
					id={`${uid}-option-${index}`}
					role="option"
					aria-selected={value === option.value}
					aria-disabled={option.disabled}
					class={theme.resolve('comboboxOption', [
						index === activeIndex ? 'active' : '',
						option.disabled ? 'disabled' : ''
					])}
					onmousedown={(event) => event.preventDefault()}
					onclick={() => choose(option)}>{option.label}</Li
				>{:else}<Li {theme} role="presentation" class={theme.resolve('comboboxEmpty')}
					>No options found.</Li
				>{/each}</Ul
		></Popover
	>
	{#if name}<Input {theme} type="hidden" {name} {value} {disabled} />{/if}
	{#if children}{@render children()}{/if}</Div
>
{#snippet searchTrigger(props: { id?: string | null; style?: string | null })}
	<Label {theme} for={props.id} class={theme.resolve('comboboxLabel')}>{label}</Label>
	<Input
		{theme}
		id={props.id}
		style={props.style}
		bind:element={input}
		type="text"
		role="combobox"
		aria-autocomplete="list"
		aria-haspopup="listbox"
		aria-controls={`${uid}-list`}
		aria-expanded={open}
		aria-activedescendant={open && activeIndex >= 0 ? `${uid}-option-${activeIndex}` : undefined}
		{disabled}
		{required}
		placeholder={selectedLabel || placeholder}
		bind:value={query}
		class={theme.resolve('comboboxInput')}
		onclick={() => {
			if (!disabled) {
				query = '';
				open = true;
				activeIndex = -1;
			}
		}}
		oninput={() => {
			open = true;
			activeIndex = -1;
		}}
		onkeydown={handleKey}
	/>
{/snippet}
