<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		alt = $bindable(),
		class: className = undefined,
		children,
		crossorigin = $bindable(),
		decoding = $bindable(),
		elementtiming = $bindable(),
		fetchpriority = $bindable(),
		ismap = $bindable(),
		isVisible = $bindable(),
		loading = $bindable(),
		referrerpolicy = $bindable(),
		sizes = $bindable(),
		src = $bindable(),
		srcset = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		usemap = $bindable(),
		width = $bindable(),
		...props
	}: {
		alt: string;
		class?: string;
		children?: any;
		crossorigin?: 'anonymous' | 'use-credentials';
		decoding?: 'async' | 'auto' | 'sync';
		elementtiming?: string;
		fetchpriority?: 'auto' | 'high' | 'low';
		ismap?: boolean;
		isVisible?: boolean;
		loading?: 'eager' | 'lazy';
		referrerpolicy?: ReferrerPolicy;
		sizes?: string;
		src: string;
		srcset?: string;
		this?: any;
		transition?: any[];
		use?: any[];
		usemap?: string;
		width?: string;
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(theme.get('img'), className);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<img
		{...props}
		{alt}
		bind:this={elem}
		class={classes}
		{crossorigin}
		{decoding}
		{elementtiming}
		{fetchpriority}
		{ismap}
		{loading}
		{referrerpolicy}
		{sizes}
		{src}
		{srcset}
		transition:transitionHandler
		use:useAction={[...use]}
		{usemap}
		{width}
	/>
{/if}
