<script lang="ts">
	// imports
	import { Card, Overlay, Portal } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { cubicInOut } from 'svelte/easing';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		close?: () => void;
		children?: any;
		containerClass?: string;
		isVisible?: boolean;
		open?: () => void;
		showOverlay?: boolean;
		toggle?: () => void;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLAttributes<HTMLElement>;

	// props
	const defaultTransition = (
		_: HTMLElement,
		params?: { delay?: number; duration?: number; easing?: (t: number) => number }
	) => {
		return {
			delay: params?.delay || 0,
			duration: params?.duration || 200,
			css: (t: number) => {
				const eased = params?.easing !== undefined ? params.easing(t) : cubicInOut(t);

				return `
          opacity: ${eased};
					transform: translateX(-50%) translateY(calc(-50% - ${1 - 1 * eased}rem)) scale(${0.9 + eased / 10});
					`;
			}
		};
	};
	let {
		class: className = undefined,
		close = $bindable(),
		children,
		containerClass = undefined,
		isVisible = $bindable(false),
		open = $bindable(),
		showOverlay = $bindable(true),
		toggle = $bindable(),
		this: elem = $bindable(),
		transition = $bindable([defaultTransition, {}]),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('modal', variant)),
			className
		)
	);

	// effects
	$effect(() => {
		if (close === undefined) close = () => (isVisible = false);
		if (open === undefined) open = () => (isVisible = true);
		if (toggle === undefined) toggle = () => (isVisible = !isVisible);
	});
</script>

<Portal>
	{#if showOverlay}
		<Overlay bind:isVisible onclick={close} />
	{/if}
	{#if children !== undefined}
		<Card {...props} class={classes} {isVisible} {transition}>
			{@render children()}
		</Card>
	{/if}
</Portal>
