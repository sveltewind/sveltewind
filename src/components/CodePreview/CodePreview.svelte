<script lang="ts">
	import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Button, Card, CodeBlock, noopTransition, Span } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { Check, Copy } from '$lib/icons';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = HTMLAttributes<HTMLElement> & {
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
		shiki?: Snippet;
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
		options = { lang: 'svelte' },
		shiki,
		title = '',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('codePreview', variants, className));
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
		<Card class="flex items-center justify-center rounded-b-none">
			{@render children()}
		</Card>
		<CodeBlock
			bind:html
			bind:isLoading
			class="-mt-px rounded-t-none"
			{code}
			header={header ?? defaultHeader}
			{isLineNumbersVisible}
			{options}
			{title}
		/>
	{/if}
</Card>

{#snippet defaultHeader()}
	<Card class="flex items-center justify-between rounded-none py-0">
		<Span>{title}</Span>
		<Button onclick={copyClickHandler} variants={['icon', 'ghost']}>
			{#if isCopied}
				<Check />
			{:else}
				<Copy />
			{/if}
		</Button>
	</Card>
{/snippet}
