<script lang="ts">
	// imports
	import { Card } from '$components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	const defaultTransition = (_: HTMLElement) => {
		return {
			duration,
			css: (t: number) => {
				const eased = cubicInOut(t);

				return `
					opacity: ${eased};
					transform: translateY(calc(-100% + ${(1 - t) * 0.5}rem)) translateX(-50%);
				`;
			}
		};
	};
	let {
		class: className = undefined,
		close = $bindable(),
		children,
		duration = $bindable(),
		isVisible = $bindable(),
		open = $bindable(),
		popover = $bindable(),
		text = $bindable(),
		toggle = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		close?: () => void;
		children?: any;
		duration?: number;
		isVisible?: boolean;
		open?: () => void;
		popover?: Snippet;
		text?: string;
		toggle?: () => void;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		classes = twMerge(theme.get('popover'), className);
	});
	$effect(() => {
		if (close === undefined) close = () => (isVisible = false);
	});
	$effect(() => {
		if (duration === undefined) duration = 200;
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = false;
	});
	$effect(() => {
		if (open === undefined) open = () => (isVisible = true);
	});
	$effect(() => {
		if (text === undefined) text = 'Popover';
	});
	$effect(() => {
		if (toggle === undefined) toggle = () => (isVisible = !isVisible);
	});
	$effect(() => {
		if (transition === undefined) transition = [defaultTransition];
	});
</script>

<div class="relative">
	{#if children !== undefined}
		{@render children()}
	{/if}
	{#if popover}
		{#if isVisible}
			{@render popover()}
		{/if}
	{:else if isVisible}
		<Card {...props} bind:this={elem} bind:transition class={classes} use={[...use]}>
			{text}
		</Card>
	{/if}
</div>
