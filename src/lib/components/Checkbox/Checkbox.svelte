<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLInputAttributes } from 'svelte/elements';
	import { Div, Input, Label, noopTransition, Span } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { twMerge } from 'tailwind-merge';
	import { Check } from '@lucide/svelte';
	import { scale } from 'svelte/transition';

	// Types
	type Props = HTMLInputAttributes & {
		checked?: boolean;
		children?: Snippet;
		class?: string;
		element?: HTMLInputElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		snippet?: Snippet;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		checked = $bindable(false),
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		snippet,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('checkbox', variants, className));

	// $effects
</script>

<Label bind:isVisible class={classes} {theme} {inTransition} {outTransition} {transition}>
	{#if snippet}
		{@render snippet()}
	{:else}
		<Div
			{theme}
			class={twMerge(
				'flex size-6 items-center justify-center bg-transparent p-0',
				checked
					? 'bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-500/30 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:focus:ring-primary-500/30'
					: undefined
			)}
			variants={['button.base', 'button.variant.ghost', 'input.base']}
		>
			<Div {theme} isVisible={checked} transition={[scale, { duration: 200 }]}>
				<Check class="size-4" />
			</Div>
		</Div>
	{/if}
	{#if children}
		<Span {theme}>{@render children()}</Span>
	{/if}

	<Input {...restProps} bind:checked bind:element class="sr-only p-0" {theme} type="checkbox" />
</Label>
