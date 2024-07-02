<script lang="ts">
	import { Card, CopyButton, SyntaxHighlighter } from '$components/index.js';
	import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
	import { twMerge } from 'tailwind-merge';

	// props
	let {
		class: className = undefined,
		code = $bindable(),
		filename = $bindable(),
		isVisible = $bindable(),
		options = $bindable(),
		this: elem = $bindable()
	}: {
		class?: string;
		code: string;
		filename: string;
		isVisible: boolean;
		options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
		this?: any;
	} = $props();

	// effects
	$effect(() => {
		if (code === undefined) code = '';
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

<Card bind:this={elem} bind:isVisible class={twMerge('overflow-visible p-0', className)}>
	<div
		class="flex items-center justify-between border-b border-slate-100 px-4 pr-2 dark:border-slate-800"
	>
		<span>
			{filename}
		</span>
		<CopyButton text={code} />
	</div>
	<SyntaxHighlighter {code} {options} />
</Card>
