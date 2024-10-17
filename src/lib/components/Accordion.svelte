<script lang="ts">
	// imports
	import { Details, Summary } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
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
		isVisible?: boolean;
		isOpen?: boolean;
		summary?: Snippet;
		title?: string;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		classes = twMerge(theme.getComponentVariant('accordion', 'default'), className);
	});
	$effect(() => {
		if (isOpen === undefined) isOpen = false;
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
	$effect(() => {
		if (title === undefined) title = 'Title';
	});
</script>

{#if isVisible}
	<Details {...props} bind:open={isOpen} bind:this={elem} class={classes} use={[...use]}>
		{#if summary}
			{@render summary()}
		{:else}
			<Summary>{title}</Summary>
		{/if}
		{#if children !== undefined}
			{@render children()}
		{/if}
	</Details>
{/if}
