<script lang="ts">
	// imports
	import { Icon, Summary } from '$lib/components/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isOpen = $bindable(),
		isVisible = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		isOpen?: boolean;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		classes = twMerge(className);
	});
	$effect(() => {
		if (isOpen === undefined) isOpen = false;
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

<Summary {...props} bind:this={elem} bind:isVisible class={classes} {transition} use={[...use]}>
	{#if children !== undefined}
		<div>{@render children()}</div>
	{/if}
	<Icon
		class={twMerge('h-4 w-4 transition duration-200', isOpen ? 'rotate-90' : 'rotate-0')}
		src={ChevronRight}
	/>
</Summary>
