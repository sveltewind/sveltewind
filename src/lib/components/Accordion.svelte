<script lang="ts">
	// imports
	import { Details, Summary } from '$components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isOpen = $bindable(),
		summary = $bindable(),
		title = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		isOpen?: boolean;
		summary?: Snippet;
		title?: string;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		classes = twMerge(theme.get('accordion'), className);
	});
	$effect(() => {
		if (isOpen === undefined) isOpen = false;
	});
	$effect(() => {
		if (title === undefined) title = 'Title';
	});
</script>

<Details {...props} bind:open={isOpen} bind:this={elem} class={classes} use={[...use]}>
	{#if summary}
		{@render summary()}
	{:else}
		<Summary bind:isOpen>{title}</Summary>
	{/if}
	{#if children !== undefined}
		{@render children()}
	{/if}
</Details>
