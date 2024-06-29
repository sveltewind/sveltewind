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
		selected = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable(),
		...props
	}: {
		class?: string;
		children?: any;
		selected?: boolean;
		value: any;
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
		classes = twMerge(theme.get('option'), className);
	});
</script>

<option
	{...props}
	bind:this={elem}
	class={classes}
	{selected}
	{value}
	transition:transitionHandler
	use:useAction={[...use]}
>
	{#if children !== undefined}
		{@render children()}
	{/if}
</option>
