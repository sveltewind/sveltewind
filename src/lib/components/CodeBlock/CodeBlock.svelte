<script lang="ts">
	import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Button, Card, noopTransition, Shiki, Span } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { Check, Copy } from '$lib/icons';

	// Types
	type Props = HTMLAttributes<HTMLDivElement> & {
		body?: Snippet;
		children?: Snippet;
		class?: string;
		code?: string;
		copyClickHandler?: () => void;
		element?: HTMLDivElement | null;
		header?: Snippet;
		html?: string;
		isCopied?: boolean;
		isLineNumbersVisible?: boolean;
		isLoading?: boolean;
		isVisible?: boolean;
		options?: Partial<CodeToHastOptions<BundledLanguage, BundledTheme>>;
		title?: string;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		body,
		children,
		class: className = '',
		code = '',
		copyClickHandler = () => {
			navigator.clipboard.writeText(code);
			isCopied = true;
			setTimeout(() => (isCopied = false), 1500);
		},
		element = $bindable(null),
		header,
		html = $bindable(''),
		isCopied = $bindable(false),
		isLineNumbersVisible = true,
		isLoading = $bindable(true),
		isVisible = $bindable(true),
		options,
		title = '',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('codeBlock', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
</script>

<Card
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	transition={[transitionFn, transitionOptions]}
>
	{#if children}
		{@render children()}
	{:else}
		{#if header}
			{@render header()}
		{:else}
			<Card class="flex items-center justify-between rounded-b-none py-0">
				<Span>{title}</Span>
				<Button onclick={copyClickHandler} variants={['icon', 'ghost']}>
					{#if isCopied}
						<Check />
					{:else}
						<Copy />
					{/if}
				</Button>
			</Card>
		{/if}
		{#if body}
			{@render body()}
		{:else}
			<Card class="-mt-px max-h-80 overflow-auto rounded-t-none">
				<Shiki bind:html bind:isLoading {code} {isLineNumbersVisible} {options} />
			</Card>
		{/if}
	{/if}
</Card>
