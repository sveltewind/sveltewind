<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Card, Overlay, Portal } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		close = $bindable(),
		children,
		isVisible = $bindable(),
		open = $bindable(),
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
		showOverlay?: boolean;
		toggle?: () => void;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();
	const modalTransition = (
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
					transform: translateY(-${1 - 1 * eased}rem) scale(${0.9 + eased / 10});
        `;
			}
		};
	};
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('modal', variant)),
			className
		);
	});

	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
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
		if (showOverlay === undefined) showOverlay = true;
	});
	$effect(() => {
		if (toggle === undefined) toggle = () => (isVisible = !isVisible);
	});
	$effect(() => {
		if (transition === undefined) transition = [modalTransition, {}];
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
			class="max-w-screen pointer-events-none fixed left-0 top-0 flex h-full max-h-screen min-h-screen w-full min-w-[100vw] items-center justify-center overflow-auto p-4"
			transition:transitionHandler
			use:useAction={[...use]}
		>
			{#if children !== undefined}
				<Card class={classes}>
					{@render children()}
				</Card>
			{/if}
		</div>
	{/if}
</Portal>
