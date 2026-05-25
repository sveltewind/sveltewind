<script lang="ts">
	import { type Component, type Snippet } from 'svelte';
	import { type HTMLAnchorAttributes } from 'svelte/elements';
	import { A, noopTransition, P } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLAnchorAttributes & {
		children?: Snippet;
		class?: string;
		description: string;
		element?: HTMLAnchorElement | null;
		href?: string;
		Icon: Component;
		isVisible?: boolean;
		title: string;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		description = '',
		element = $bindable(null),
		href = '',
		Icon,
		isVisible = $bindable(true),
		title = '',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('blockLink', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

{#if isVisible}
	<A
		{...restProps}
		bind:element
		class={classes}
		{href}
		transition={[transitionFn, transitionOptions]}
	>
		{#if children}
			{@render children()}
		{:else}
			<Icon class="text-primary-500" />
			<P class="text-current dark:text-current">{title}</P>
			<P>{description}</P>
		{/if}
	</A>
{/if}
