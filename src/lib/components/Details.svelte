<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { EventHandler, HTMLDetailsAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		ontoggle = $bindable(),
		open = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		ontoggle?: EventHandler<Event, HTMLDetailsElement> | null | undefined;
		open?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(theme.get('details'), className);
	});
	$effect(() => {
		if (ontoggle === undefined)
			ontoggle = (e: Event & { currentTarget: EventTarget & HTMLDetailsElement }) => {
				open = e.newState === 'open';
			};
	});
	$effect(() => {
		if (open === undefined) open = false;
	});
</script>

<details
	{...props}
	bind:this={elem}
	class={classes}
	{ontoggle}
	{open}
	transition:transitionHandler
	use:useAction={[...use]}
>
	{#if children !== undefined}
		{@render children()}
	{/if}
</details>
