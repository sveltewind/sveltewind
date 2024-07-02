<script lang="ts">
	import { SyntaxHighlighter } from '$lib/components/index.js';
	import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';

	// props
	let {
		code = $bindable(),
		isVisible = $bindable(),
		options = $bindable(),
		this: elem = $bindable()
	}: {
		code: string;
		isVisible: boolean;
		options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
		this?: any;
	} = $props();

	// effects
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
	$effect(() => {
		if (options === undefined) options = {};
		if (options?.defaultColor === undefined) options.defaultColor = false;
		if (options?.transformers === undefined)
			options.transformers = [
				{
					pre(node) {
						this.addClassToHast(node, 'px-4 py-2 overflow-auto');
					}
				}
			];
	});
</script>

<SyntaxHighlighter bind:this={elem} bind:isVisible {code} {options} />
