<script lang="ts">
	// imports
	import { Card } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		orientation = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		orientation?: 'horizontal' | 'vertical';
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		if (orientation === undefined) orientation = 'vertical';
		classes = twMerge(
			'relative overflow-hidden rounded-xl h-[600px] p-0 shadow-none border-[4px] border-[#0E0E0E]',
			orientation === 'vertical' ? 'aspect-[9/19.5]' : 'aspect-[19.5/9]',
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<Card {...props} bind:this={elem} class={classes} {transition} {use}>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</Card>
{/if}
