<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable(),
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		value?: any;
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(theme.getComponentVariant('textarea', 'default'), className);
	});

	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<textarea
		{...props}
		bind:this={elem}
		bind:value
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	/>
{/if}
