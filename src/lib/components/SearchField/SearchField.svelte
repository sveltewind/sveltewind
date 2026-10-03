<script lang="ts">
	import { Button, Form, Input, Label, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';

	// Types

	type Props = HTMLFormAttributes & {
		children?: Snippet;
		class?: string;
		disabled?: boolean;
		element?: HTMLFormElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		label?: string;
		name?: string;
		onSearch?: (value: string) => void;
		onsubmit?: HTMLFormAttributes['onsubmit'];
		outTransition?: TransitionProps;
		placeholder?: string;
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
		label = 'Search',
		name = 'q',
		onSearch,
		onsubmit,
		outTransition,
		placeholder = 'Search...',
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable(''),
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('searchField', variants, className));

	// Helpers
	const submit: NonNullable<HTMLFormAttributes['onsubmit']> = (event) => {
		onsubmit?.(event);
		if (event.defaultPrevented) return;
		if (onSearch) {
			event.preventDefault();
			onSearch(value);
		}
	};
</script>

<Form
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	role="search"
	onsubmit={submit}
	><Label {theme} for={`${uid}-search`} class="sr-only">{label}</Label><Input
		{theme}
		id={`${uid}-search`}
		type="search"
		{name}
		{placeholder}
		{disabled}
		bind:value
		class={theme.resolve('searchFieldInput')}
	/>{#if value}<Button
			{theme}
			type="button"
			{disabled}
			variants={['ghost']}
			class={theme.resolve('searchFieldClear')}
			aria-label="Clear search"
			onclick={() => {
				value = '';
				element?.querySelector('input')?.focus();
			}}><Span {theme} aria-hidden="true">&times;</Span></Button
		>{/if}<Button {theme} type="submit" {disabled} class={theme.resolve('searchFieldSubmit')}
		>Search</Button
	>{#if children}{@render children()}{/if}</Form
>
