<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Button, Div, noopTransition, Radio } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { twMerge } from 'tailwind-merge';

	// Types
	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		isVisible?: boolean;
		tabs?: Tab[];
		theme?: Theme;
		transition?: TransitionProps;
		value?: any;
		variants?: string[];
	};
	type Tab = {
		title: string;
		value: any;
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		isVisible = $bindable(true),
		tabs = [],
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		value = $bindable(),
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('tabs', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

<Div
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	transition={[transitionFn, transitionOptions]}
>
	{#if children}
		{@render children()}
	{:else}
		{#each tabs as tab}
			<Button
				class={twMerge(
					'rounded-sm px-5 py-2 inset-ring-1 inset-ring-transparent',
					tab.value === value
						? ''
						: 'text-gray-600 inset-ring-transparent hover:text-current focus:text-current dark:text-gray-400'
				)}
				variants={tab.value === value ? [] : ['ghost']}
				onclick={() => (value = tab.value)}
			>
				{tab.title}
			</Button>
		{/each}
	{/if}
</Div>
