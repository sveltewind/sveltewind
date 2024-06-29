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
		type = 'button',
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		type?: string;
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
		classes = twMerge(theme.get('button'), className);
	});
</script>

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
