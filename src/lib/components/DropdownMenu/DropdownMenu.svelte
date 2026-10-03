<script lang="ts">
	import { A, Button, Div, Li, Popover, Ul, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tick, type ComponentProps, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { MenuItem } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		items?: MenuItem[];
		label?: string;
		onSelect?: ((item: MenuItem) => void) | undefined;
		open?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// Constants
	let focusLast = false;
	let previousOpen = false;
	let restoreFocus = true;
	let typeahead = '';
	let typeaheadTime = 0;

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		items = [],
		label = 'Options',
		onSelect,
		open = $bindable(false),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let panel = $state<HTMLDivElement | null>(null);
	let triggerElement = $state<HTMLButtonElement | null>(null);

	// $derived
	const classes = $derived(theme.resolve('dropdownMenu', variants, className));

	// Helpers
	const enabledItems = () =>
		Array.from(panel?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)') ?? []);
	const handleKey = (event: KeyboardEvent) => {
		const nodes = enabledItems();
		if (!nodes.length) return;
		const index = nodes.indexOf(document.activeElement as HTMLElement);
		let next = index;
		if (event.key === ' ') {
			event.preventDefault();
			nodes[index]?.click();
			return;
		}
		if (event.key === 'ArrowDown') next = (index + 1) % nodes.length;
		else if (event.key === 'ArrowUp') next = (index - 1 + nodes.length) % nodes.length;
		else if (event.key === 'Home') next = 0;
		else if (event.key === 'End') next = nodes.length - 1;
		else if (event.key === 'Escape') {
			event.preventDefault();
			open = false;
			return;
		} else if (event.key === 'Tab') {
			restoreFocus = false;
			open = false;
			return;
		} else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
			const now = Date.now();
			typeahead = (now - typeaheadTime > 500 ? '' : typeahead) + event.key.toLowerCase();
			typeaheadTime = now;
			next = nodes.findIndex(
				(node, i) => i > index && node.textContent?.trim().toLowerCase().startsWith(typeahead)
			);
			if (next < 0)
				next = nodes.findIndex((node) =>
					node.textContent?.trim().toLowerCase().startsWith(typeahead)
				);
			if (next < 0) return;
		} else return;
		event.preventDefault();
		nodes[next]?.focus();
	};
	const select = (item: MenuItem) => {
		if (item.disabled) return;
		open = false;
		onSelect?.(item);
	};

	// $effect
	$effect(() => {
		if (open && panel) {
			const target = panel;
			void tick().then(() => {
				if (open && panel === target) {
					const nodes = enabledItems();
					nodes[focusLast ? nodes.length - 1 : 0]?.focus();
					focusLast = false;
				}
			});
		}
		if (previousOpen && !open && restoreFocus) triggerElement?.focus();
		previousOpen = open;
		restoreFocus = true;
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
		bind:element={panel}
		trigger={menuTrigger}
		class={theme.resolve('dropdownMenuPanel')}
	>
		<Ul
			{theme}
			variants={['plain']}
			role="menu"
			aria-label={label}
			onkeydown={handleKey}
			class={theme.resolve('dropdownMenuList')}
		>
			{#each items as item (item.value)}<Li {theme} role="none"
					>{#if item.href && !item.disabled}<A
							{theme}
							role="menuitem"
							tabindex={-1}
							href={item.href}
							class={theme.resolve('dropdownMenuItem')}
							onclick={() => select(item)}>{item.label}</A
						>{:else}<Button
							{theme}
							type="button"
							role="menuitem"
							tabindex={-1}
							disabled={item.disabled}
							variants={['ghost']}
							class={theme.resolve('dropdownMenuItem')}
							onclick={() => select(item)}>{item.label}</Button
						>{/if}</Li
				>{/each}
		</Ul></Popover
	></Div
>
{#snippet menuTrigger(props: ComponentProps<typeof Button>)}<Button
		{theme}
		{...props}
		bind:element={triggerElement}
		aria-haspopup="menu"
		aria-label={label}
		onkeydown={(event) => {
			if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
				event.preventDefault();
				focusLast = event.key === 'ArrowUp';
				open = true;
			}
		}}
		>{#if children}{@render children()}{:else}{label}{/if}</Button
	>{/snippet}
