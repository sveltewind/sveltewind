<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Overlay, Portal } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		close = $bindable(),
		children,
		isVisible = $bindable(),
		open = $bindable(),
		position = $bindable(),
		showOverlay = $bindable(),
		toggle = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: {
		class?: string;
		close?: () => void;
		children?: any;
		isVisible?: boolean;
		open?: () => void;
		position?: 'bottom' | 'left' | 'right' | 'top';
		showOverlay?: boolean;
		toggle?: () => void;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();
	let transitionHandler = $state((node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	});
	let positionDefaultSettings = new Map([
		[
			'bottom',
			{
				classes: 'min-w-full max-w-full overflow-auto bottom-0 left-0',
				transitionParameters: { duration: 200, opacity: 1, y: '100%' }
			}
		],
		[
			'left',
			{
				classes: 'min-h-full max-h-full overflow-auto top-0 left-0',
				transitionParameters: { duration: 200, opacity: 1, x: '-100%' }
			}
		],
		[
			'right',
			{
				classes: 'min-h-full max-h-full overflow-auto top-0 right-0',
				transitionParameters: { duration: 200, opacity: 1, x: '100%' }
			}
		],
		[
			'top',
			{
				classes: 'min-w-full max-w-full overflow-auto top-0 left-0',
				transitionParameters: { duration: 200, opacity: 1, y: '-100%' }
			}
		]
	]);

	// effects
	$effect(() => {
		if (close === undefined) close = () => (isVisible = false);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = false;
	});
	$effect(() => {
		if (open === undefined) open = () => (isVisible = true);
	});
	$effect(() => {
		if (position === undefined) position = 'left';
		if (position !== undefined)
			classes = twMerge(
				theme.getComponentVariant('drawer', 'default'),
				positionDefaultSettings.get(position).classes,
				className
			);
	});
	$effect(() => {
		if (showOverlay === undefined) showOverlay = true;
	});
	$effect(() => {
		if (toggle === undefined) toggle = () => (isVisible = !isVisible);
	});
	$effect(() => {
		transition =
			transition === undefined
				? [fly, positionDefaultSettings.get(position)?.transitionParameters]
				: [transition[0], positionDefaultSettings.get(position)?.transitionParameters];
	});
	onMount(() => {
		isVisible = false;
	});
</script>

<Portal>
	{#if showOverlay}
		<Overlay bind:isVisible onclick={close} />
	{/if}
	{#if isVisible}
		<div
			{...props}
			bind:this={elem}
			class={classes}
			transition:transitionHandler
			use:useAction={[...use]}
		>
			{#if children !== undefined}
				{@render children()}
			{/if}
		</div>
	{/if}
</Portal>
