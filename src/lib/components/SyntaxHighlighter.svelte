<script lang="ts">
	// imports
	import { ProgressIndicator } from '$lib/components/index.js';
	import { createHighlighter } from 'shiki';
	import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
	import { onMount } from 'svelte';

	// types
	type Props = {
		code: string;
		isVisible?: boolean;
		options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
	};

	// props
	let {
		code = $bindable('let banana = 🍌'),
		isVisible = $bindable(true),
		options = $bindable({ lang: 'text', theme: 'github-dark' })
	}: Props = $props();
	let html = $state('');

	// effects
	$effect(() => {
		if (options?.lang === undefined) options.lang = 'text';
		if (options?.theme === undefined) options.theme = 'github-dark';
		if (options?.themes === undefined)
			options.themes = { dark: 'github-dark', light: 'github-light' };
	});

	onMount(async () => {
		const highlighter = await createHighlighter({
			langs: options?.langs || [options?.lang || 'text'],
			themes: Array.isArray(options?.themes)
				? options.themes
				: options?.themes !== undefined
					? Object.values(options.themes)
					: [options?.theme || 'github-dark']
		});

		html = highlighter.codeToHtml(code, options);

		highlighter.dispose();
	});
</script>

{#if isVisible}
	{#if html === ''}
		<ProgressIndicator />
	{:else}
		{@html html}
	{/if}
{/if}
