<script lang="ts">
	import { A, Li, Nav, Ol, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { BreadcrumbItem } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		items?: BreadcrumbItem[];
		outTransition?: TransitionProps;
		separator?: Snippet | undefined;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		items = [],
		outTransition,
		separator,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('breadcrumbs', variants, className));
</script>

<Nav
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	aria-label={restProps['aria-label'] ?? 'Breadcrumbs'}
	><Ol {theme} variants={['plain']} class={theme.resolve('breadcrumbsList')}>
		{#each items as item, index (index)}<Li {theme} class={theme.resolve('breadcrumbsItem')}
				>{#if index > 0}<Span
						{theme}
						aria-hidden="true"
						class={theme.resolve('breadcrumbsSeparator')}
						>{#if separator}{@render separator()}{:else}/{/if}</Span
					>{/if}{#if item.href && index < items.length - 1}<A {theme} href={item.href}
						>{item.label}</A
					>{:else}<Span {theme} aria-current={index === items.length - 1 ? 'page' : undefined}
						>{item.label}</Span
					>{/if}</Li
			>{/each}</Ol
	>{#if children}{@render children()}{/if}</Nav
>
