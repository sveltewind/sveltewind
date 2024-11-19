<script lang="ts">
	// imports
	import { theme } from '$lib/index.js';
	import { Card } from '$lib/components/index.js';
	import type { Snippet } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';

	// types
	type Props = {
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
		variants?: string[];
	} & HTMLAttributes<HTMLElement>;

	// props
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
		close = $bindable(() => (isVisible = false)),
		children,
		duration = $bindable(200),
		isVisible = $bindable(false),
		open = $bindable(() => (isVisible = true)),
		popover = $bindable(),
		text = $bindable('Popover'),
		toggle = $bindable(() => (isVisible = !isVisible)),
		this: elem = $bindable(),
		transition = $bindable([defaultTransition]),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('popover', variant)),
			className
		)
	);
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
