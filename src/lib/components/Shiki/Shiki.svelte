<script lang="ts">
	import type { Element, RootContent } from 'hast';
	import { toHtml } from 'hast-util-to-html';
	import type {
		BundledLanguage,
		BundledTheme,
		CodeToHastOptions,
		StringLiteralUnion,
		ThemeRegistrationAny
	} from 'shiki';
	import { type Snippet } from 'svelte';
	import { type HTMLAttributes } from 'svelte/elements';
	import { Code, noopTransition, Pre, Span } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	import { getShikiHighlighter } from './getShikiHighlighter';

	// Types
	type Props = HTMLAttributes<HTMLPreElement> & {
		children?: Snippet;
		class?: string;
		code?: string;
		element?: HTMLPreElement | null;
		html?: string;
		isLineNumbersVisible?: boolean;
		isLoading?: boolean;
		isVisible?: boolean;
		options?: Partial<CodeToHastOptions<BundledLanguage, BundledTheme>>;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		code = '',
		element = $bindable(null),
		html = $bindable(''),
		isLineNumbersVisible = true,
		isLoading = $bindable(true),
		isVisible = $bindable(true),
		options,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state

	// $derived
	const classes = $derived(theme.resolve('shiki', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});

	// $effects
	$effect(() => {
		if (!code) {
			html = '';
			isLoading = false;
			return;
		}

		let cancelled = false;

		const run = async () => {
			isLoading = true;

			try {
				const highlighter = await getShikiHighlighter();

				if (options && 'themes' in options && options.themes !== undefined) {
					options.defaultColor = false;
					if ('light' in options.themes)
						await highlighter.loadTheme(options.themes.light as BundledTheme);
					if ('dark' in options.themes)
						await highlighter.loadTheme(options.themes.dark as BundledTheme);
				} else if (options && !('theme' in options)) {
					options.defaultColor = false;
					options.themes = {
						light: 'github-light',
						dark: 'github-dark'
					};
				}

				const resolvedOptions: CodeToHastOptions<BundledLanguage, BundledTheme> = {
					lang: 'ts',
					...options,

					transformers: [
						...(options?.transformers ?? []),

						...(options && 'themes' in options
							? [
									{
										span(node: Element) {
											const existing = node.properties.class ?? [];

											node.properties.class = [
												...(Array.isArray(existing) ? existing : [existing]),
												'text-[var(--shiki-light)]',
												'dark:text-[var(--shiki-dark)]'
											] as string[];
										}
									}
								]
							: []),

						...(isLineNumbersVisible
							? [
									{
										line(node: Element, line: number) {
											node.children.unshift({
												type: 'element',
												tagName: 'span',
												properties: {
													class: ['mr-4 text-right min-w-4 inline-block text-gray-500'],
													'aria-hidden': 'true'
												},
												children: [{ type: 'text', value: String(line) }]
											});
										}
									}
								]
							: [])
					]
				};

				const hast = highlighter.codeToHast(code, resolvedOptions);

				const preNode = hast.children.find(
					(node): node is Element => node.type === 'element' && node.tagName === 'pre'
				);

				const codeNode = preNode?.children.find(
					(node): node is Element => node.type === 'element' && node.tagName === 'code'
				);

				const serializedHtml = codeNode
					? toHtml({ type: 'root', children: codeNode.children })
					: '';

				if (!cancelled) {
					html = serializedHtml;
				}
			} catch (error) {
				console.error('Error loading Shiki highlighter:', error);

				if (!cancelled) {
					html = '';
				}
			} finally {
				if (!cancelled) {
					isLoading = false;
				}
			}
		};

		run();

		return () => {
			cancelled = true;
		};
	});
</script>

<Pre {...restProps} bind:element class={classes} transition={[transitionFn, transitionOptions]}>
	{#if children}
		{@render children()}
	{:else}
		<Code class="m-0 bg-transparent p-0 text-current">
			{#if isLoading}
				<Span class="animate-pulse">Loading...</Span>
			{:else}
				{@html html}
			{/if}
		</Code>
	{/if}
</Pre>
