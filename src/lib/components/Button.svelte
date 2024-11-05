<script lang="ts">
	// imports
	import { setType, use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		type = 'button',
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		type?: string;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('button', variant)),
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<button
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[[setType, type], ...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</button>
{/if}
