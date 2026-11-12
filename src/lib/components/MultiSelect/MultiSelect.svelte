<script lang="ts">
	import { Badge, Button, Combobox, Div, Input, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import { fromAction } from 'svelte/attachments';
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
		selectionPlacement?: 'inline' | 'below';
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
		selectionPlacement = 'below',
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable([]),
		variants = [],
		...restProps
	}: Props = $props();

	// helpers
	const add = (selected: string) => {
		if (disabled || !selected || value.includes(selected)) return;
		value = [...value, selected];
		pending = '';
		onValueChange?.(value);
	};
	const remove = (selected: string) => {
		if (disabled) return;
		value = value.filter((entry) => entry !== selected);
		onValueChange?.(value);
	};
	const initializeScroll = (node: HTMLDivElement) => {
		let drag: { pointerId: number; x: number; left: number } | undefined;
		let suppressClick = false;
		const updateMask = () => {
			const left = node.scrollLeft > 1;
			const right = node.scrollLeft + node.clientWidth < node.scrollWidth - 1;
			node.style.maskImage =
				left || right
					? `linear-gradient(to right, ${left ? 'transparent' : 'black'}, black 12px, black calc(100% - 12px), ${right ? 'transparent' : 'black'})`
					: 'none';
		};
		const pointerDown = (event: PointerEvent) => {
			if (event.pointerType !== 'mouse' || event.button !== 0) return;
			suppressClick = false;
			drag = { pointerId: event.pointerId, x: event.clientX, left: node.scrollLeft };
		};
		const pointerMove = (event: PointerEvent) => {
			if (!drag || event.pointerId !== drag.pointerId || !event.buttons) return;
			const delta = event.clientX - drag.x;
			if (!suppressClick && Math.abs(delta) < 4) return;
			if (node.scrollWidth <= node.clientWidth) return;
			suppressClick = true;
			node.setPointerCapture(event.pointerId);
			event.preventDefault();
			node.scrollLeft = drag.left - delta;
		};
		const pointerUp = (event: PointerEvent) => {
			if (!drag || event.pointerId !== drag.pointerId) return;
			if (node.hasPointerCapture(event.pointerId)) node.releasePointerCapture(event.pointerId);
			drag = undefined;
		};
		const click = (event: MouseEvent) => {
			if (!suppressClick || event.detail === 0) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			suppressClick = false;
		};
		const resize = new ResizeObserver(updateMask);
		const mutations = new MutationObserver(updateMask);
		resize.observe(node);
		mutations.observe(node, { childList: true, subtree: true, characterData: true });
		node.addEventListener('scroll', updateMask, { passive: true });
		node.addEventListener('pointerdown', pointerDown);
		node.addEventListener('pointermove', pointerMove);
		node.addEventListener('pointerup', pointerUp);
		node.addEventListener('pointercancel', pointerUp);
		node.addEventListener('lostpointercapture', pointerUp);
		node.addEventListener('click', click, true);
		updateMask();
		return {
			destroy: () => {
				resize.disconnect();
				mutations.disconnect();
				node.removeEventListener('scroll', updateMask);
				node.removeEventListener('pointerdown', pointerDown);
				node.removeEventListener('pointermove', pointerMove);
				node.removeEventListener('pointerup', pointerUp);
				node.removeEventListener('pointercancel', pointerUp);
				node.removeEventListener('lostpointercapture', pointerUp);
				node.removeEventListener('click', click, true);
			}
		};
	};

	// consts
	const scrollAttachment = fromAction(initializeScroll);

	// $state
	let pending = $state('');

	// $derived
	const classes = $derived(theme.resolve('multiSelect', variants, className));
	const availableOptions = $derived(options.filter((option) => !value.includes(option.value)));

	// $effects
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
		closeOnSelect={false}
		{theme}
		{disabled}
		{label}
		{placeholder}
		inputPrefix={selectionPlacement === 'inline' ? selectedValues : undefined}
		options={availableOptions}
		bind:value={pending}
		onValueChange={add}
	/>
	{#if selectionPlacement === 'below'}{@render selectedValues()}{/if}
	{#each value as selected (selected)}
		{#if name}<Input {theme} type="hidden" {name} value={selected} {disabled} />{/if}
	{/each}
	{#if children}{@render children()}{/if}
</Div>

{#snippet selectedValues(focusInput?: () => void)}
	{#if value.length || selectionPlacement === 'below'}
		<Div
			{@attach selectionPlacement === 'inline' ? scrollAttachment : undefined}
			{theme}
			role="group"
			aria-label="Selected options"
			class={theme.resolve(
				selectionPlacement === 'inline' ? 'multiSelectInlineValues' : 'multiSelectValues'
			)}
		>
			{#each value as selected (selected)}
				<Badge
					{theme}
					class={theme.resolve(
						'multiSelectChip',
						selectionPlacement === 'inline' ? ['inline'] : []
					)}
				>
					{options.find((option) => option.value === selected)?.label ?? selected}
					<Button
						{theme}
						type="button"
						{disabled}
						variants={['ghost']}
						class={theme.resolve('multiSelectRemove')}
						aria-label={`Remove ${options.find((option) => option.value === selected)?.label ?? selected}`}
						onclick={() => {
							remove(selected);
							focusInput?.();
						}}
					>
						<Span {theme} aria-hidden="true">&times;</Span>
					</Button>
				</Badge>
			{/each}
		</Div>
	{/if}
{/snippet}
