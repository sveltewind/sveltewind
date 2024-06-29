<script lang="ts">
	// imports
	import { theme } from '$lib/index.js';
	import { use as useAction } from '$lib/actions/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		href = '#',
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		href: string;
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
		classes = twMerge(theme.get('a'), className);
	});
</script>

<a
	{...props}
	bind:this={elem}
	class={classes}
	{href}
	transition:transitionHandler
	use:useAction={[...use]}
>
	{#if children !== undefined}
		{@render children()}
	{/if}
</a>
