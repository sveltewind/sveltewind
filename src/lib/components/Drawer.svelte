<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Overlay, Portal } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		close?: () => void;
		children?: Snippet;
		isVisible?: boolean;
		open?: () => void;
		position?: 'bottom' | 'left' | 'right' | 'top';
		showOverlay?: boolean;
		toggle?: () => void;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLAttributes<HTMLElement>;

	// props
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
	let {
		class: className = undefined,
		close = $bindable(),
		children,
		isVisible = $bindable(false),
		open = $bindable(),
		position = $bindable('left'),
		showOverlay = $bindable(true),
		toggle = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('drawer', variant)),
			positionDefaultSettings.get(position)?.classes,
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLElement) => {
			if (transition === undefined) {
				const positionDefaultSetting = positionDefaultSettings.get(position);
				if (positionDefaultSetting !== undefined) {
					return fly(node, positionDefaultSetting.transitionParameters);
				}
				return;
			}
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});

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
