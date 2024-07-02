<script lang="ts">
	// imports
	import { Button } from '$lib/components/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = $bindable(),
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();
	const variantClasses = new Map([
		['icon', 'px-3 py-3'],
		[
			'ghost',
			'bg-transparent text-current shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30'
		]
	]);

	// effects
	$effect(() => {
		if (variants === undefined) variants = [];
	});
	$effect(() => {
		classes = twMerge(
			...variants?.map((variant: string) => variantClasses.get(variant)),
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

<Button {...props} bind:this={elem} bind:isVisible class={classes} {transition} use={[...use]}>
	{#if children !== undefined}
		{@render children()}
	{/if}
</Button>
